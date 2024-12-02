import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_schema_llama_ConstantAtomicTagged = _test_llm_schema({
  model: "llama",
  name: "ConstantAtomicTagged",
})(typia.llm.schema<ConstantAtomicTagged, "llama">({}));
