import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
   typia.application<[ICollection<ArrayRecursive>], "ajv">()
);