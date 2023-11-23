import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
  typia.json.application<[ICollection<ArraySimple>], "ajv">(),
);
