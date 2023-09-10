import typia from "typia";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.json.createStringify<ICollection<ObjectRecursive>>(),
);
