import typia from "typia";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ConstantAtomicTagged = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ConstantAtomicTagged",
  })(typia.llm.schema<ConstantAtomicTagged, "claude">({}));