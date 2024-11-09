import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectSimple = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectSimple",
  })(typia.llm.schema<ObjectSimple, "3.0">());