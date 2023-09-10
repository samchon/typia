import typia from "typia";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerStringifyBenchmarkProgram } from "../createFastifyPureServerStringifyBenchmarkProgram";

createFastifyPureServerStringifyBenchmarkProgram(
    typia.json.application<[ICollection<ObjectUnionExplicit>], "ajv">(),
);
