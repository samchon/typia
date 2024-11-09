import typia from "typia";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectDescription = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectDescription",
  })(typia.llm.schema<ObjectDescription, "chatgpt">());