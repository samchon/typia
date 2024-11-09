import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TemplateUnion = 
  _test_llm_schema({
    model: "3.1",
    name: "TemplateUnion",
  })(typia.llm.schema<TemplateUnion, "3.1">());