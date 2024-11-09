import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectNullable = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectNullable",
  })(typia.llm.schema<ObjectNullable, "chatgpt">());