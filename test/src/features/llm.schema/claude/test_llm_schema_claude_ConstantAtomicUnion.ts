import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ConstantAtomicUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ConstantAtomicUnion",
  })(typia.llm.schema<ConstantAtomicUnion, "claude">({}));