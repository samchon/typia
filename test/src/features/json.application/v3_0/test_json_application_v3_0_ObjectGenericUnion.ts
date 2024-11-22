import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_json_application_v3_0_ObjectGenericUnion =
  _test_json_application({
    version: "3.0",
    name: "ObjectGenericUnion",
  })(typia.json.application<ObjectGenericUnionApplication, "3.0">());

interface ObjectGenericUnionApplication {
  insert(first: ObjectGenericUnion): Promise<void>;
  reduce(
    first: ObjectGenericUnion,
    second: ObjectGenericUnion | null,
  ): Promise<ObjectGenericUnion>;
  coalesce(
    first: ObjectGenericUnion | null,
    second: ObjectGenericUnion | null,
    third?: ObjectGenericUnion | null,
  ): Promise<ObjectGenericUnion | null>;
}
