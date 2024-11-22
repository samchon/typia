import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_application_v3_1_ObjectGenericArray =
  _test_json_application({
    version: "3.1",
    name: "ObjectGenericArray",
  })(typia.json.application<ObjectGenericArrayApplication, "3.1">());

interface ObjectGenericArrayApplication {
  insert(first: ObjectGenericArray): Promise<void>;
  reduce(
    first: ObjectGenericArray,
    second: ObjectGenericArray | null,
  ): Promise<ObjectGenericArray>;
  coalesce(
    first: ObjectGenericArray | null,
    second: ObjectGenericArray | null,
    third?: ObjectGenericArray | null,
  ): Promise<ObjectGenericArray | null>;
}
