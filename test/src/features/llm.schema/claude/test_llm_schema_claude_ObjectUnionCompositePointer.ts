import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_schema_claude_ObjectUnionCompositePointer = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectUnionCompositePointer",
  })(typia.llm.schema<ObjectUnionCompositePointer, "claude">({}));
