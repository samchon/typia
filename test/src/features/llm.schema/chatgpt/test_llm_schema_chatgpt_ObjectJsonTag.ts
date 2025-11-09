import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectJsonTag = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectJsonTag",
  })(typia.llm.schema<ObjectJsonTag, "chatgpt">({}));