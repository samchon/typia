import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_application_claude_ObjectIntersection = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ObjectIntersection",
    factory: ObjectIntersection,
  })(typia.llm.application<ObjectIntersectionApplication, "claude">());

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
