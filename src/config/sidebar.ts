import type { SidebarItem } from 'node_modules/@astrojs/starlight/schemas/sidebar';

export const sidebar: SidebarItem[] = [
  { label: '首页', link: '/' },
  { label: '第一个示例', link: '/examples/01-first-example/' },
].map(item => ({...item, translations: {}, attrs: {}}));
