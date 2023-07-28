import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
   typia.application<[ICollection<ObjectRecursive>], "ajv">()
);