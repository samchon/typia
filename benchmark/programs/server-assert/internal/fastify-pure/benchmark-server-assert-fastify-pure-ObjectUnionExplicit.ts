import typia from "typia";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerAssertBenchmarkProgram } from "../createFastifyPureServerAssertBenchmarkProgram";

createFastifyPureServerAssertBenchmarkProgram(
    typia.application<[ICollection<ObjectUnionExplicit>], "ajv">(),
);
