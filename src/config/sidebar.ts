import type { SidebarItem } from 'node_modules/@astrojs/starlight/schemas/sidebar';

export const sidebar: SidebarItem[] = [
  { label: '首页', link: '/' },
  { label: '鼠标交互增强', link: '/examples/01-cursor-enhance/' },
].map(item => ({...item, translations: {}, attrs: {}}));
