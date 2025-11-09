import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ObjectRequired = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ObjectRequired",
    factory: ObjectRequired
  })(
    typia.llm.application<ObjectRequiredApplication, "claude">(),
  );

interface ObjectRequiredApplication {
  insert(p: { first: ObjectRequired }): Promise<void>;
  reduce(p: { first: ObjectRequired, second: ObjectRequired | null }): Promise<ObjectRequired>;
  coalesce(p: {
    first: ObjectRequired | null,
    second: ObjectRequired | null,
    third?: ObjectRequired | null,
  }): Promise<ObjectRequired | null>;
}