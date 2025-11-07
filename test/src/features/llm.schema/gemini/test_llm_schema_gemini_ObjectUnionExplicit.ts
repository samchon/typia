import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_schema_gemini_ObjectUnionExplicit = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectUnionExplicit",
  })(typia.llm.schema<ObjectUnionExplicit, "gemini">({}));
