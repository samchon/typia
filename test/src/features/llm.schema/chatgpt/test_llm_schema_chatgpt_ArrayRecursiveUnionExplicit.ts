import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_schema_chatgpt_ArrayRecursiveUnionExplicit =
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.llm.schema<ArrayRecursiveUnionExplicit, "chatgpt">({}));
