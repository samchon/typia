import typia from "typia";

import { ObjectUnionExplicit } from "../../../structures/pure/ObjectUnionExplicit";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(typia.createIs<ObjectUnionExplicit>());
