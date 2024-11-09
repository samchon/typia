import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectDate = 
  _test_llm_schema({
    model: "3.1",
    name: "ObjectDate",
  })(typia.llm.schema<ObjectDate, "3.1">());