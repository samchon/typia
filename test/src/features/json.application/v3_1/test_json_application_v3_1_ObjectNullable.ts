import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_application_v3_1_ObjectNullable = _test_json_application(
  {
    version: "3.1",
    name: "ObjectNullable",
  },
)(typia.json.application<ObjectNullableApplication, "3.1">());

interface ObjectNullableApplication {
  insert(first: ObjectNullable): Promise<void>;
  reduce(
    first: ObjectNullable,
    second: ObjectNullable | null,
  ): Promise<ObjectNullable>;
  coalesce(
    first: ObjectNullable | null,
    second: ObjectNullable | null,
    third?: ObjectNullable | null,
  ): Promise<ObjectNullable | null>;
}
