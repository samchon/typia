import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_application_chatgpt_DynamicSimple = _test_llm_application(
  {
    model: "chatgpt",
    name: "DynamicSimple",
  },
)(typia.llm.application<DynamicSimpleApplication, "chatgpt">());

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
