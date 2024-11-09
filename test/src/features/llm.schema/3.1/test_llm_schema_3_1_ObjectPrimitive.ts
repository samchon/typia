import typia from "typia";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectPrimitive = 
  _test_llm_schema({
    model: "3.1",
    name: "ObjectPrimitive",
  })(typia.llm.schema<ObjectPrimitive, "3.1">());