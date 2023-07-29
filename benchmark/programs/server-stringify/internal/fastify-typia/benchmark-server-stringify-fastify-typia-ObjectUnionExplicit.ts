import typia from "typia";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

createFastifyCustomServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ObjectUnionExplicit>>(),
);
