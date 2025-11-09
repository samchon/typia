import typia from "typia";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectUnionDouble = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectUnionDouble",
  })(typia.llm.schema<ObjectUnionDouble, "chatgpt">({}));