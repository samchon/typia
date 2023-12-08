import typia from "typia";

import { ObjectUnionImplicit } from "../../../structures/pure/ObjectUnionImplicit";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(typia.createIs<ObjectUnionImplicit>());
