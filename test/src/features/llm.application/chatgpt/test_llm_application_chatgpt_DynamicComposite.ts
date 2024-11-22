import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_application_chatgpt_DynamicComposite =
  _test_llm_application({
    model: "chatgpt",
    name: "DynamicComposite",
  })(typia.llm.application<DynamicCompositeApplication, "chatgpt">());

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
