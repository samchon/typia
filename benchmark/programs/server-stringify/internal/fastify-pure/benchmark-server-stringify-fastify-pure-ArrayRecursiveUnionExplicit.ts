import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
    typia.application<[ICollection<ArrayRecursiveUnionExplicit>], "ajv">(),
);
