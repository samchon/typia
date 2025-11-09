import typia from "typia";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ObjectDynamic = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ObjectDynamic",
    factory: ObjectDynamic
  })(
    typia.llm.application<ObjectDynamicApplication, "claude">(),
  );

interface ObjectDynamicApplication {
  insert(p: { first: ObjectDynamic }): Promise<void>;
  reduce(p: { first: ObjectDynamic, second: ObjectDynamic | null }): Promise<ObjectDynamic>;
  coalesce(p: {
    first: ObjectDynamic | null,
    second: ObjectDynamic | null,
    third?: ObjectDynamic | null,
  }): Promise<ObjectDynamic | null>;
}