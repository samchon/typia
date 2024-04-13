import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
  typia.json.application<[ObjectSimple], "3.0">(),
);
