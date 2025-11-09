import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectUnionExplicitPointer = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.schema<ObjectUnionExplicitPointer, "claude">({}));