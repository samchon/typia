import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectGenericArray = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectGenericArray",
  })(typia.llm.schema<ObjectGenericArray, "chatgpt">({}));