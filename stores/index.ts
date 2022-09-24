// 创建存储
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
interface Store {
  menulist: Ref<{ icon: string; text: string; to: string }[]>
}

export const useStore = defineStore('useStore', {
  state: (): Store => ({
    menulist: ref<{ icon: string; text: string; to: string }[]>([
      { text: '首页', icon: 'mdi-folder', to: '/' }
    ])
  }),
  actions: {}
})
