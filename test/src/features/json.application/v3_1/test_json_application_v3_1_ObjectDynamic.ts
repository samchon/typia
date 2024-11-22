import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_application_v3_1_ObjectDynamic = _test_json_application({
  version: "3.1",
  name: "ObjectDynamic",
})(typia.json.application<ObjectDynamicApplication, "3.1">());

interface ObjectDynamicApplication {
  insert(first: ObjectDynamic): Promise<void>;
  reduce(
    first: ObjectDynamic,
    second: ObjectDynamic | null,
  ): Promise<ObjectDynamic>;
  coalesce(
    first: ObjectDynamic | null,
    second: ObjectDynamic | null,
    third?: ObjectDynamic | null,
  ): Promise<ObjectDynamic | null>;
}
