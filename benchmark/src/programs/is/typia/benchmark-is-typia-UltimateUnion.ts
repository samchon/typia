import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(typia.createIs<UltimateUnion>());
