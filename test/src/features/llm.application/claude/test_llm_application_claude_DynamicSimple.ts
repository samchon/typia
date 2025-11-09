import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_DynamicSimple = (): void =>
  _test_llm_application({
    model: "claude",
    name: "DynamicSimple",
    factory: DynamicSimple
  })(
    typia.llm.application<DynamicSimpleApplication, "claude">(),
  );

interface DynamicSimpleApplication {
  insert(p: { first: DynamicSimple }): Promise<void>;
  reduce(p: { first: DynamicSimple, second: DynamicSimple | null }): Promise<DynamicSimple>;
  coalesce(p: {
    first: DynamicSimple | null,
    second: DynamicSimple | null,
    third?: DynamicSimple | null,
  }): Promise<DynamicSimple | null>;
}