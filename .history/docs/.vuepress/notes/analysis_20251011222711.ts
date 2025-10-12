import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "aanalysis",
  sidebar: [
    {
      text: "数学分析",
      collapsed: false,
      link: "/analysis/",
      items: ["chapter-1", ],
    },
  ],
  title: '数学分析',
  type: "doc",
});
