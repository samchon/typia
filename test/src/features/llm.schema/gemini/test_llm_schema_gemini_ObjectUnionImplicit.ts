import typia from "typia";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectUnionImplicit = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectUnionImplicit",
  })(typia.llm.schema<ObjectUnionImplicit, "gemini">({}));