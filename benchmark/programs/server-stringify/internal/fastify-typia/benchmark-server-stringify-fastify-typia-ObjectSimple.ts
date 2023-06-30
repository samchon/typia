import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

createFastifyCustomServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ObjectSimple>>(),
);
