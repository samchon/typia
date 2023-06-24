import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
   typia.application<[ICollection<ArrayRecursiveUnionExplicit>], "ajv">()
);