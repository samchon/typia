import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../structures/pure/ArrayRecursiveUnionImplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
  typia.json.schemas<[ArrayRecursiveUnionImplicit], "3.0">(),
);
