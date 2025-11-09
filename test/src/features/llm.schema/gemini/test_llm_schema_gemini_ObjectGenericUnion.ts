import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectGenericUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectGenericUnion",
  })(typia.llm.schema<ObjectGenericUnion, "gemini">({}));