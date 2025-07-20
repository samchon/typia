import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_applicationEquals_claude_ObjectIntersection = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectIntersection",
    factory: ObjectIntersection,
  })(
    typia.llm.application<
      ObjectIntersectionApplication,
      "claude",
      { equals:; true }
    >(),
  );

interface ObjectIntersectionApplication {
  insert(p: { first: ObjectIntersection }): Promise<void>;
  reduce(p: {
    first: ObjectIntersection;
    second: ObjectIntersection | null;
  }): Promise<ObjectIntersection>;
  coalesce(p: {
    first: ObjectIntersection | null;
    second: ObjectIntersection | null;
    third?: ObjectIntersection | null;
  }): Promise<ObjectIntersection | null>;
}
