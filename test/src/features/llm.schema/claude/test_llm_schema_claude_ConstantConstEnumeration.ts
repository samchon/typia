import typia from "typia";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ConstantConstEnumeration = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ConstantConstEnumeration",
  })(typia.llm.schema<ConstantConstEnumeration, "claude">({}));