import typia from "typia";

import { ArrayHierarchical } from "../../../../test/structures/ArrayHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(typia.createStringify<ArrayHierarchical>());
