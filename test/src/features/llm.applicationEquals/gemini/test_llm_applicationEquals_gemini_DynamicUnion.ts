import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_DynamicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "DynamicUnion",
    factory: DynamicUnion
  })(
    typia.llm.application<DynamicUnionApplication, "gemini", { equals: true }>(),
  );

interface DynamicUnionApplication {
  insert(p: { first: DynamicUnion }): Promise<void>;
  reduce(p: { first: DynamicUnion, second: DynamicUnion | null }): Promise<DynamicUnion>;
  coalesce(p: {
    first: DynamicUnion | null,
    second: DynamicUnion | null,
    third?: DynamicUnion | null,
  }): Promise<DynamicUnion | null>;
}