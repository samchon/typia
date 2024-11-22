import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_application_v3_1_ObjectGeneric = _test_json_application({
  version: "3.1",
  name: "ObjectGeneric",
})(typia.json.application<ObjectGenericApplication, "3.1">());

interface ObjectGenericApplication {
  insert(first: ObjectGeneric): Promise<void>;
  reduce(
    first: ObjectGeneric,
    second: ObjectGeneric | null,
  ): Promise<ObjectGeneric>;
  coalesce(
    first: ObjectGeneric | null,
    second: ObjectGeneric | null,
    third?: ObjectGeneric | null,
  ): Promise<ObjectGeneric | null>;
}
