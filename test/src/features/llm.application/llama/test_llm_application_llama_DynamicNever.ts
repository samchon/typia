import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_application_llama_DynamicNever = (): void =>
  _test_llm_application({
    model: "llama",
    name: "DynamicNever",
    factory: DynamicNever,
  })(typia.llm.application<DynamicNeverApplication, "llama">());

interface DynamicNeverApplication {
  insert(p: { first: DynamicNever }): Promise<void>;
  reduce(p: {
    first: DynamicNever;
    second: DynamicNever | null;
  }): Promise<DynamicNever>;
  coalesce(p: {
    first: DynamicNever | null;
    second: DynamicNever | null;
    third?: DynamicNever | null;
  }): Promise<DynamicNever | null>;
}
