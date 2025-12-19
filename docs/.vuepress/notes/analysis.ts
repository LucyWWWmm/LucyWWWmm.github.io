import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "analysis",
  sidebar: [
    {
      text: "数学分析",
      collapsed: false,
      link: "/analysis/",
      items: ["chapter-1", "chapter-2", "chapter-3", "chapter-4", "chapter-5", "chapter-6", "chapter-7", "chapter-8", "chapter-9", "chapter-10"],
    },
  ],
  title: '数学分析',
  type: "doc",
});