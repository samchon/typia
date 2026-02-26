import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectUnionExplicit } from "../../../../structures/pure/ObjectUnionExplicit";
import { createFastifyPureServerAssertBenchmarkProgram } from "../createFastifyPureServerAssertBenchmarkProgram";

createFastifyPureServerAssertBenchmarkProgram(
  typia.json.schemas<[ICollection<ObjectUnionExplicit>], "3.0">(),
);
