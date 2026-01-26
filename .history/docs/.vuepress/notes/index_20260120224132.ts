import { defineCollections } from "vuepress-theme-plume";

import analysis from "./analysis.ts";
import algebra from "./algebra.ts";
import python from "./programming.ts";
import programming from "./programming.ts";

export const notes = defineCollections([

	analysis,
	algebra,
	programming,

]);
