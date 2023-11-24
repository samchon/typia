import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
  typia.json.application<[ArrayRecursiveUnionExplicit], "ajv">(),
);
