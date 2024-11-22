import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_application_v3_1_ObjectIntersection =
  _test_json_application({
    version: "3.1",
    name: "ObjectIntersection",
  })(typia.json.application<ObjectIntersectionApplication, "3.1">());

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
