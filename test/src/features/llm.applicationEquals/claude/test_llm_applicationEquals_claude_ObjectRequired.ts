import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_applicationEquals_claude_ObjectRequired = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectRequired",
    factory: ObjectRequired,
  })(
    typia.llm.application<
      ObjectRequiredApplication,
      "claude",
      { equals: true }
    >(),
  );

interface ObjectRequiredApplication {
  insert(p: { first: ObjectRequired }): Promise<void>;
  reduce(p: {
    first: ObjectRequired;
    second: ObjectRequired | null;
  }): Promise<ObjectRequired>;
  coalesce(p: {
    first: ObjectRequired | null;
    second: ObjectRequired | null;
    third?: ObjectRequired | null;
  }): Promise<ObjectRequired | null>;
}
