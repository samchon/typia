import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectDate = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectDate",
  })(typia.llm.schema<ObjectDate, "gemini">({}));