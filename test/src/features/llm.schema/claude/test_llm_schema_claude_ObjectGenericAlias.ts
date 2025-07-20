import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_llm_schema_claude_ObjectGenericAlias = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectGenericAlias",
  })(typia.llm.schema<ObjectGenericAlias, "claude">({}));
