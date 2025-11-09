import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_schema_3_0_DynamicConstant = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "DynamicConstant",
  })(typia.llm.schema<DynamicConstant, "3.0">());
