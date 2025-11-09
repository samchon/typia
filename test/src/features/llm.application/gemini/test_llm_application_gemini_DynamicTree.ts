import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_DynamicTree = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "DynamicTree",
    factory: DynamicTree
  })(
    typia.llm.application<DynamicTreeApplication, "gemini">(),
  );

interface DynamicTreeApplication {
  insert(p: { first: DynamicTree }): Promise<void>;
  reduce(p: { first: DynamicTree, second: DynamicTree | null }): Promise<DynamicTree>;
  coalesce(p: {
    first: DynamicTree | null,
    second: DynamicTree | null,
    third?: DynamicTree | null,
  }): Promise<DynamicTree | null>;
}