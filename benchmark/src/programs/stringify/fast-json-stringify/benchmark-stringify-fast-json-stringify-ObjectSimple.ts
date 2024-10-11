import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.schemas<[ObjectSimple], "3.0">(),
);
