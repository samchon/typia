import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_llm_schema_3_1_TypeTagAtomicUnion = _test_llm_schema({
  model: "3.1",
  name: "TypeTagAtomicUnion",
})(typia.llm.schema<TypeTagAtomicUnion, "3.1">({}));
