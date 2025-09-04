import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_schema_chatgpt_ObjectUnionExplicitPointer = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.schema<ObjectUnionExplicitPointer, "chatgpt">({}));
