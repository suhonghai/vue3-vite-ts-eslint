import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { visualizer } from 'rollup-plugin-visualizer'

import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig(({ command }) => {
    return {
        base: './', // 开发或生产环境服务的公共基础路径。
        server: {
            host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
            port: 5173,
        },
        envPrefix: 'VUE_', // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。
        resolve: {
            alias: { // 配置别名
                '~': resolve(__dirname, '.'),
                '@': resolve(__dirname, 'src'),
                '/#': resolve(__dirname, 'types'),
            },
            extensions: [ // 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
                '.mjs',
                '.js',
                '.mts',
                '.ts',
                '.jsx',
                '.tsx',
                '.json',
                '.vue',
            ],
        },
        plugins: [
            vue(), // 支持 vue
            vueJsx(), // 支持 jsx tsx
            AutoImport({ // 按需自动导入 Vite、Webpack、Rspack、Rollup 和 esbuild 的 API。具有 TypeScript 支持。
                imports: [
                    'vue',
                    'vue-router'
                ],
                resolvers: [ElementPlusResolver({ importStyle: false })],
                dts: 'auto-imports.d.ts', // 生成文件的位置
            }),
            Components({ // Vue的按需组件自动导入。
                dirs: ['library/components'],
                resolvers: [ElementPlusResolver()],
                dts: 'components.d.ts', // 生成文件的位置
            }),
            createSvgIconsPlugin({ // svg 导入
                iconDirs: [resolve('src/icons/svg')],
                symbolId: 'icon-[name]',
            }),
            eslintPlugin({ // eslint 校验
                include: [
                    'src/**/*.js',
                    'src/**/*.ts',
                    'src/**/*.vue',
                    'src/**/*.jsx',
                    'src/**/*.tsx',
                    'src/*.js',
                    'src/*.vue',
                ],
            }),
            visualizer({ // 可视化并分析Rollup包，以查看哪些模块占用了空间。
                // 必须放在最后一个
                filename: 'stats.html',
                open: true,
                gzipSize: true,
                sourcemap: true,
            }),
        ],
        esbuild: {
            jsxFactory: 'h',
            jsxFragment: 'Fragment',
        },
        optimizeDeps: {
            include: [
                'axios',
                'element-plus',
                'pinia',
            ],
            exclude: [],
        },
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    chunkFileNames: 'static/js/[name]-[hash].js', // 引入文件名的名称
                    entryFileNames: 'static/js/[name]-[hash].js', // 包的入口文件名称
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
                    manualChunks: {
                        vue: ['vue'],
                        vueRouter: ['vue-router'],
                        qs: ['qs'],
                        axios: ['axios'],
                        lodash: ['lodash'],
                        echarts: ['echarts'],
                        elementUi: ['element-plus'],
                    },
                },
            },
            //   关闭文件计算
            // reportCompressedSize: false,
            sourcemap: command === 'serve',
            // chunkSizeWarningLimit: 1500 // 消除打包大小超过500kb警告
        },
    }
})