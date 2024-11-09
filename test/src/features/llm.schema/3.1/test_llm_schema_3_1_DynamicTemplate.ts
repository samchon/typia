import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_DynamicTemplate = 
  _test_llm_schema({
    model: "3.1",
    name: "DynamicTemplate",
  })(typia.llm.schema<DynamicTemplate, "3.1">());