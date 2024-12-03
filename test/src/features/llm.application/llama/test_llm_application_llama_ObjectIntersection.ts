import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_application_llama_ObjectIntersection =
  _test_llm_application({
    model: "llama",
    name: "ObjectIntersection",
  })(typia.llm.application<ObjectIntersectionApplication, "llama">());

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
