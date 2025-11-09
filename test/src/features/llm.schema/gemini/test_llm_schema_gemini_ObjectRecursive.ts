import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectRecursive = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectRecursive",
  })(typia.llm.schema<ObjectRecursive, "gemini">({}));