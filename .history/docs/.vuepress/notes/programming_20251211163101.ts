import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "python",
  sidebar: [
    {
      text: "python",
      collapsed: false,
      link: "/python/",
      items: ["chapter-1", "chapter-2", "chapter-3", "review", "practice"],
    },
  ],
  title: 'python',
  type: "doc",
});