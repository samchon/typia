import typia from "typia";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectOptional = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectOptional",
  })(typia.llm.schema<ObjectOptional, "gemini">({}));