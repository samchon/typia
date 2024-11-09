import typia from "typia";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectGeneric = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectGeneric",
  })(typia.llm.schema<ObjectGeneric, "chatgpt">());