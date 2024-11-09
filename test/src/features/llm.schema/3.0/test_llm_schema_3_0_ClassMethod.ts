import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ClassMethod = 
  _test_llm_schema({
    model: "3.0",
    name: "ClassMethod",
  })(typia.llm.schema<ClassMethod, "3.0">());