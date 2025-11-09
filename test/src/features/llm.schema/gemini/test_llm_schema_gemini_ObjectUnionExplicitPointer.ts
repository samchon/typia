import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_schema_gemini_ObjectUnionExplicitPointer = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.schema<ObjectUnionExplicitPointer, "gemini">({}));
