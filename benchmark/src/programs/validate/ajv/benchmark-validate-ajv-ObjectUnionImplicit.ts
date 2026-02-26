import typia from "typia";

import { ObjectUnionImplicit } from "../../../structures/pure/ObjectUnionImplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
  typia.json.schemas<[ObjectUnionImplicit], "3.0">(),
);
