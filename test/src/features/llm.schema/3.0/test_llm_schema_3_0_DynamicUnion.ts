import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_llm_schema_3_0_DynamicUnion = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "DynamicUnion",
  })(typia.llm.schema<DynamicUnion, "3.0">());
