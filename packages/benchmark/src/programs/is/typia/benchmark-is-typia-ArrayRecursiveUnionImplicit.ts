import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../../test/structures/ArrayRecursiveUnionImplicit";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(typia.createIs<ArrayRecursiveUnionImplicit>());
