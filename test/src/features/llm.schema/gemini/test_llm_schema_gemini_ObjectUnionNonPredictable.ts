import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_schema_gemini_ObjectUnionNonPredictable = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectUnionNonPredictable",
  })(typia.llm.schema<ObjectUnionNonPredictable, "gemini">({}));
