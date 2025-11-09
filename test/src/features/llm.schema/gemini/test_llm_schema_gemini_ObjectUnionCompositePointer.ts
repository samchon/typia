import typia from "typia";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectUnionCompositePointer = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectUnionCompositePointer",
  })(typia.llm.schema<ObjectUnionCompositePointer, "gemini">({}));