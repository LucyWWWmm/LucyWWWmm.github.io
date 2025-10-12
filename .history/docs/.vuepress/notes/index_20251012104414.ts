import { defineCollections } from "vuepress-theme-plume";

import analysis from "./analysis.ts";
import algebra from "./algebra.ts";
import python from "./python.ts";

export const notes = defineCollections([

	analysis,
	algebra,
	python,

]);
