import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(typia.createIs<ObjectSimple>());
