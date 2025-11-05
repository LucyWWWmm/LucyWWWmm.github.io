import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "algebra",
  sidebar: [
    {
      text: "高等代数",
      collapsed: false,
      link: "/algebra/",
      items: ["chapter-1", "chapter-2", "lesson-1"]
    },
  ],
  title: '高等代数',
  type: "doc",
});