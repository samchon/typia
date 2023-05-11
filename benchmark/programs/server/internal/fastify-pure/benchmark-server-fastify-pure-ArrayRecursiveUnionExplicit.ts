import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createFastifyPureServerBenchmarkProgram } from "../createFastifyPureServerBenchmarkProgram";

createFastifyPureServerBenchmarkProgram(
   typia.application<[ArrayRecursiveUnionExplicit[]], "ajv">()
);