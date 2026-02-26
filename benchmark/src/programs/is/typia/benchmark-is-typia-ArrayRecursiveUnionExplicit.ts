import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(typia.createIs<ArrayRecursiveUnionExplicit>());
