import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

createFastifyCustomServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ObjectUnionExplicit>>(),
);