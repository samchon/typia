import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TemplateUnion = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "TemplateUnion",
  })(typia.llm.schema<TemplateUnion, "chatgpt">({}));