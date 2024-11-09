import typia from "typia";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectTuple = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectTuple",
  })(typia.llm.schema<ObjectTuple, "chatgpt">());