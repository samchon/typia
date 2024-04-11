import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../structures/pure/ArrayRecursiveUnionImplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
  typia.json.application<[ArrayRecursiveUnionImplicit]>(),
);
