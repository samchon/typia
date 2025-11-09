import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_TypeTagFormat = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagFormat",
  })(typia.llm.schema<TypeTagFormat, "gemini">({}));