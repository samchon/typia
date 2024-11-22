import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_application_chatgpt_ObjectIntersection =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectIntersection",
  })(typia.llm.application<ObjectIntersectionApplication, "chatgpt">());

interface ObjectIntersectionApplication {
  insert(first: ObjectIntersection): Promise<void>;
  reduce(
    first: ObjectIntersection,
    second: ObjectIntersection | null,
  ): Promise<ObjectIntersection>;
  coalesce(
    first: ObjectIntersection | null,
    second: ObjectIntersection | null,
    third?: ObjectIntersection | null,
  ): Promise<ObjectIntersection | null>;
}
