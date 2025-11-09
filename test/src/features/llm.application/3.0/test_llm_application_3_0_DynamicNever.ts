import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_DynamicNever = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "DynamicNever",
    factory: DynamicNever
  })(
    typia.llm.application<DynamicNeverApplication, "3.0">(),
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