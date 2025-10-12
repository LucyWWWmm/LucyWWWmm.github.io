import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "astro-front",
  sidebar: [
    {
      text: "天体物理前沿讲座",
      collapsed: false,
      link: "/astro-front/",
      items: ["chapter-1", ],
    },
  ],
  title: '天体物理前沿讲座',
  type: "doc",
});
