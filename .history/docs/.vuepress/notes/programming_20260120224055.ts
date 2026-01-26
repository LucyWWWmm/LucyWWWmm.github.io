import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "programming",
  sidebar: [
    {
      text: "python",
      collapsed: false,
      link: "/programming/python/",
      items: ["/programming/chapter-1", "/programming/chapter-2", "/programming/chapter-3", "/programming/review", "/programming/practice"],
    },
    {
			text: "matlab",
			collapsed: false,
			link: "/programming/matlab/",
			items: [
				"/programming/basic-1",
			],
		},
  ],
  title: 'programming',
  type: "doc",
});