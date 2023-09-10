import typia from "typia";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
    typia.json.application<[ICollection<ObjectRecursive>], "ajv">(),
);
