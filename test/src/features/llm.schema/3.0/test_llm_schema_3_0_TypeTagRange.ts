import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_schema_3_0_TypeTagRange = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagRange",
  })(typia.llm.schema<TypeTagRange, "3.0">());
