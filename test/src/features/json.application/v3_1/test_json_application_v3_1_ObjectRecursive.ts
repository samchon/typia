import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_application_v3_1_ObjectRecursive =
  _test_json_application({
    version: "3.1",
    name: "ObjectRecursive",
  })(typia.json.application<ObjectRecursiveApplication, "3.1">());

interface ObjectRecursiveApplication {
  insert(first: ObjectRecursive): Promise<void>;
  reduce(
    first: ObjectRecursive,
    second: ObjectRecursive | null,
  ): Promise<ObjectRecursive>;
  coalesce(
    first: ObjectRecursive | null,
    second: ObjectRecursive | null,
    third?: ObjectRecursive | null,
  ): Promise<ObjectRecursive | null>;
}
