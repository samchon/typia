import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_DynamicComposite = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "DynamicComposite",
    factory: DynamicComposite
  })(
    typia.llm.application<DynamicCompositeApplication, "gemini">(),
  );

interface DynamicCompositeApplication {
  insert(p: { first: DynamicComposite }): Promise<void>;
  reduce(p: { first: DynamicComposite, second: DynamicComposite | null }): Promise<DynamicComposite>;
  coalesce(p: {
    first: DynamicComposite | null,
    second: DynamicComposite | null,
    third?: DynamicComposite | null,
  }): Promise<DynamicComposite | null>;
}