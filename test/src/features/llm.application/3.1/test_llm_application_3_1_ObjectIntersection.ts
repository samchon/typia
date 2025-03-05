import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_application_3_1_ObjectIntersection =
  _test_llm_application({
    model: "3.1",
    name: "ObjectIntersection",
    factory: ObjectIntersection,
  })(typia.llm.application<ObjectIntersectionApplication, "3.1">());

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
