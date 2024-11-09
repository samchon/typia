import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectJsonTag = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectJsonTag",
  })(typia.llm.schema<ObjectJsonTag, "3.0">());