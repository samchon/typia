import typia from "typia";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_DynamicConstant = (): void =>
  _test_llm_application({
    model: "claude",
    name: "DynamicConstant",
    factory: DynamicConstant
  })(
    typia.llm.application<DynamicConstantApplication, "claude">(),
  );

interface DynamicConstantApplication {
  insert(p: { first: DynamicConstant }): Promise<void>;
  reduce(p: { first: DynamicConstant, second: DynamicConstant | null }): Promise<DynamicConstant>;
  coalesce(p: {
    first: DynamicConstant | null,
    second: DynamicConstant | null,
    third?: DynamicConstant | null,
  }): Promise<DynamicConstant | null>;
}