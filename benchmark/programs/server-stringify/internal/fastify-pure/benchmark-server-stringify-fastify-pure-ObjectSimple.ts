import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
    typia.json.application<[ICollection<ObjectSimple>], "ajv">(),
);
