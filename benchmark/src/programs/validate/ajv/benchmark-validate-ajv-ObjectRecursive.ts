import typia from "typia";

import { ObjectRecursive } from "../../../structures/pure/ObjectRecursive";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
  typia.json.schemas<[ObjectRecursive], "3.0">(),
);
