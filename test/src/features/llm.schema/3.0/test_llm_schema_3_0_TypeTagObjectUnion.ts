import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_schema_3_0_TypeTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagObjectUnion",
  })(typia.llm.schema<TypeTagObjectUnion, "3.0">());
