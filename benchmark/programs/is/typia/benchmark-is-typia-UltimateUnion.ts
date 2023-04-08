import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(
    typia.createIs<UltimateUnion>()
);