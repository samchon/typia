import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_application_3_1_DynamicComposite = _test_llm_application({
  model: "3.1",
  name: "DynamicComposite",
})(typia.llm.application<DynamicCompositeApplication, "3.1">());

interface DynamicCompositeApplication {
  insert(first: DynamicComposite): Promise<void>;
  reduce(
    first: DynamicComposite,
    second: DynamicComposite | null,
  ): Promise<DynamicComposite>;
  coalesce(
    first: DynamicComposite | null,
    second: DynamicComposite | null,
    third?: DynamicComposite | null,
  ): Promise<DynamicComposite | null>;
}
