import typia from "typia";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ConstantAtomicTagged = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ConstantAtomicTagged",
  })(typia.llm.schema<ConstantAtomicTagged, "gemini">({}));