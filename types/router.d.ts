import type { RouteRecordRaw } from 'vue-router'
/**
 * 路由记录
 */
declare interface VabRouteRecord
  extends Omit<RouteRecordRaw, 'name' | 'meta' | 'children'> {
  name: string
  meta: VabRouteMeta
  children?: VabRouteRecord[]
}

declare interface VabRouteMeta {
  // 菜单、面包屑、多标签页显示的名称
  title?: string
}
