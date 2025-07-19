import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_application_claude_ObjectNullable =
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectNullable",
    factory: ObjectNullable,
  })(
    typia.llm.application<
      ObjectNullableApplication,
      "claude",
      { equal: true }
    >(),
  );

interface ObjectNullableApplication {
  insert(p: { first: ObjectNullable }): Promise<void>;
  reduce(p: {
    first: ObjectNullable;
    second: ObjectNullable | null;
  }): Promise<ObjectNullable>;
  coalesce(p: {
    first: ObjectNullable | null;
    second: ObjectNullable | null;
    third?: ObjectNullable | null;
  }): Promise<ObjectNullable | null>;
}
