import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_DynamicComposite = 
  _test_llm_schema({
    model: "3.0",
    name: "DynamicComposite",
  })(typia.llm.schema<DynamicComposite, "3.0">());