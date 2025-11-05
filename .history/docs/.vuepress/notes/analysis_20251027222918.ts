import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "analysis",
  sidebar: [
    {
      text: "数学分析",
      collapsed: false,
      link: "/analysis/",
      items: ["chapter-1", "chapter-2", "chapter-3"],
    },
  ],
  title: '数学分析',
  type: "doc",
});