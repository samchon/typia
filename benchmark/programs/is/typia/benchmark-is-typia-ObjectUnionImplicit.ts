import typia from "typia";

import { ObjectUnionImplicit } from "../../../../test/structures/ObjectUnionImplicit";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(typia.createIs<ObjectUnionImplicit>());
