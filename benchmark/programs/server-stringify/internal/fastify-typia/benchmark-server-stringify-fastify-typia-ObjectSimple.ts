import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

createFastifyCustomServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ObjectSimple>>(),
);