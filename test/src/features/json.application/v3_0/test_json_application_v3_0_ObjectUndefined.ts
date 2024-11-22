import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_application_v3_0_ObjectUndefined =
  _test_json_application({
    version: "3.0",
    name: "ObjectUndefined",
  })(typia.json.application<ObjectUndefinedApplication, "3.0">());

interface ObjectUndefinedApplication {
  insert(first: ObjectUndefined): Promise<void>;
  reduce(
    first: ObjectUndefined,
    second: ObjectUndefined | null,
  ): Promise<ObjectUndefined>;
  coalesce(
    first: ObjectUndefined | null,
    second: ObjectUndefined | null,
    third?: ObjectUndefined | null,
  ): Promise<ObjectUndefined | null>;
}
