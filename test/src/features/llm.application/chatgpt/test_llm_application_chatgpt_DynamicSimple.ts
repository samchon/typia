import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_application_chatgpt_DynamicSimple = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "DynamicSimple",
    factory: DynamicSimple,
  })(typia.llm.application<DynamicSimpleApplication, "chatgpt">());

interface DynamicSimpleApplication {
  insert(p: { first: DynamicSimple }): Promise<void>;
  reduce(p: {
    first: DynamicSimple;
    second: DynamicSimple | null;
  }): Promise<DynamicSimple>;
  coalesce(p: {
    first: DynamicSimple | null;
    second: DynamicSimple | null;
    third?: DynamicSimple | null;
  }): Promise<DynamicSimple | null>;
}
