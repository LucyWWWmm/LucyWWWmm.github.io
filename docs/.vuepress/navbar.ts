/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
	{ text: "首页", link: "/" },
	{ text: "博客", link: "/blog/" },
	{
		text: "笔记",
		items: [
			{ text: "数学分析", link: "/analysis/README.md" },
		],
	},
	{
		text: "关于",
		items: [
			{ text: "关于我", link: "/about/" },
			{ text: "时间线", link: "/timeline/" },
		],
	},
	{ text: "友链", link: "/links/" },
]);