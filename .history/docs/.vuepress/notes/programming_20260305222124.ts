import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "programming",
  sidebar: [

    {
      text: "Python",
      collapsed: false,
      items: ["/programming/Python/chapter-1", "/programming/Python/chapter-2", "/programming/Python/chapter-3", "/programming/Python/review", "/programming/Python/practice"],
    },
    {
			text: "matlab",
			collapsed: false,
			items: [
				"/programming/matlab/basic-1", "/programming/matlab/basic-2",
			],
		},
   
  ],
  title: '编程',
  type: "doc",
});