import typia from "typia";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectIntersection = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectIntersection",
  })(typia.llm.schema<ObjectIntersection, "chatgpt">({}));