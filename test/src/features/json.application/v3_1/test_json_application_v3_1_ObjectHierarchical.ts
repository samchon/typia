import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_application_v3_1_ObjectHierarchical =
  _test_json_application({
    version: "3.1",
    name: "ObjectHierarchical",
  })(typia.json.application<ObjectHierarchicalApplication, "3.1">());

interface ObjectHierarchicalApplication {
  insert(first: ObjectHierarchical): Promise<void>;
  reduce(
    first: ObjectHierarchical,
    second: ObjectHierarchical | null,
  ): Promise<ObjectHierarchical>;
  coalesce(
    first: ObjectHierarchical | null,
    second: ObjectHierarchical | null,
    third?: ObjectHierarchical | null,
  ): Promise<ObjectHierarchical | null>;
}
