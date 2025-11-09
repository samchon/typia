import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectRecursive = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectRecursive",
  })(typia.llm.schema<ObjectRecursive, "chatgpt">({}));