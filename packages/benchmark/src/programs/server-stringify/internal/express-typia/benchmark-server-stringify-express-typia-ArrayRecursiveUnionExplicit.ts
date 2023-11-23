import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
  typia.json.createStringify<ICollection<ArrayRecursiveUnionExplicit>>(),
);
