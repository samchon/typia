import typia from "typia";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectGenericAlias = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectGenericAlias",
  })(typia.llm.schema<ObjectGenericAlias, "chatgpt">());