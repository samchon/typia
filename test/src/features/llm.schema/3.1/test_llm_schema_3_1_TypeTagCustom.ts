import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_schema_3_1_TypeTagCustom = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagCustom",
  })(typia.llm.schema<TypeTagCustom, "3.1">({}));
