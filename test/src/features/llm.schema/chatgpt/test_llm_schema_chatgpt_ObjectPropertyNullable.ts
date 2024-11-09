import typia from "typia";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectPropertyNullable = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectPropertyNullable",
  })(typia.llm.schema<ObjectPropertyNullable, "chatgpt">());