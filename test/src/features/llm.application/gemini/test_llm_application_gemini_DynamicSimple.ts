import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_application_gemini_DynamicSimple = _test_llm_application({
  model: "gemini",
  name: "DynamicSimple",
})(typia.llm.application<DynamicSimpleApplication, "gemini">());

interface DynamicSimpleApplication {
  insert(first: DynamicSimple): Promise<void>;
  reduce(
    first: DynamicSimple,
    second: DynamicSimple | null,
  ): Promise<DynamicSimple>;
  coalesce(
    first: DynamicSimple | null,
    second: DynamicSimple | null,
    third?: DynamicSimple | null,
  ): Promise<DynamicSimple | null>;
}
