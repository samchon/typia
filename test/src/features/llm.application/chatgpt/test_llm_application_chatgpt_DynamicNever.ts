import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_DynamicNever = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "DynamicNever",
    factory: DynamicNever
  })(
    typia.llm.application<DynamicNeverApplication, "chatgpt">(),
  );

interface DynamicNeverApplication {
  insert(p: { first: DynamicNever }): Promise<void>;
  reduce(p: { first: DynamicNever, second: DynamicNever | null }): Promise<DynamicNever>;
  coalesce(p: {
    first: DynamicNever | null,
    second: DynamicNever | null,
    third?: DynamicNever | null,
  }): Promise<DynamicNever | null>;
}