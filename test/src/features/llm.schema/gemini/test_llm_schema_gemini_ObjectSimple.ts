import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectSimple = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectSimple",
  })(typia.llm.schema<ObjectSimple, "gemini">({}));