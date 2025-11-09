import typia from "typia";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectUnionExplicit = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectUnionExplicit",
  })(typia.llm.schema<ObjectUnionExplicit, "chatgpt">({}));