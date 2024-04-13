import typia from "typia";

import { ObjectUnionExplicit } from "../../../structures/pure/ObjectUnionExplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
  typia.json.application<[ObjectUnionExplicit], "3.0">(),
);
