import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectGenericArray = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectGenericArray",
  })(typia.llm.schema<ObjectGenericArray, "gemini">({}));