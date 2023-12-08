import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
  typia.json.application<[ArrayRecursiveUnionExplicit], "ajv">(),
);
