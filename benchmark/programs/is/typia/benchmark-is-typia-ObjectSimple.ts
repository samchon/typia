import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(
    typia.createIs<ObjectSimple>()
);