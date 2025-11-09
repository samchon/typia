import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_schema_claude_ObjectUnionNonPredictable = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectUnionNonPredictable",
  })(typia.llm.schema<ObjectUnionNonPredictable, "claude">({}));
