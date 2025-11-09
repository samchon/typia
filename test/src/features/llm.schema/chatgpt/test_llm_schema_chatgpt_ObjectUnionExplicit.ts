import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_schema_chatgpt_ObjectUnionExplicit = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectUnionExplicit",
  })(typia.llm.schema<ObjectUnionExplicit, "chatgpt">({}));
