import { defineStore } from 'pinia'
export const useAclStore = defineStore('acl', {
  state: () => ({
    admin: false,
    role: 'getRole',
  }),
  getters: {
    getAdmin: (state) => state.admin,
    getRole: (state) => state.role,
  },
  actions: {
    setFull(admin: boolean) {
      this.admin = admin
    },
  },
})
