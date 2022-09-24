import { createI18n } from 'vue-i18n'
import ch from './zh-cn/cain.json'
import en from './en/cain.json'

const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  globalInjection: true,
  messages: {
    'zh-cn': ch,
    en: en
  }
})

export default i18n
