import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_DynamicComposite = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "DynamicComposite",
    factory: DynamicComposite
  })(
    typia.llm.application<DynamicCompositeApplication, "gemini", { equals: true }>(),
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