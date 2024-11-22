import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_application_v3_0_ObjectPrimitive =
  _test_json_application({
    version: "3.0",
    name: "ObjectPrimitive",
  })(typia.json.application<ObjectPrimitiveApplication, "3.0">());

interface ObjectPrimitiveApplication {
  insert(first: ObjectPrimitive): Promise<void>;
  reduce(
    first: ObjectPrimitive,
    second: ObjectPrimitive | null,
  ): Promise<ObjectPrimitive>;
  coalesce(
    first: ObjectPrimitive | null,
    second: ObjectPrimitive | null,
    third?: ObjectPrimitive | null,
  ): Promise<ObjectPrimitive | null>;
}
