import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "programming",
  sidebar: [

    {
      text: "python",
      collapsed: false,
      link: "/programming/python/",
      items: ["/programming/python/chapter-1", "/programming/python/chapter-2", "/programming/python/chapter-3", "/programming/python/review", "/programming/python/practice"],
    },
    {
			text: "matlab",
			collapsed: false,
			link: "/programming/matlab/",
			items: [
				"/programming/matlab/basic-1",
			],
		},
  ],
  title: 'programming',
  type: "doc",
});