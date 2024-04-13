import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
  typia.json.application<[ObjectSimple], "3.0">(),
);
