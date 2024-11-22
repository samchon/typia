import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_application_v3_0_ObjectDescription =
  _test_json_application({
    version: "3.0",
    name: "ObjectDescription",
  })(typia.json.application<ObjectDescriptionApplication, "3.0">());

interface ObjectDescriptionApplication {
  insert(first: ObjectDescription): Promise<void>;
  reduce(
    first: ObjectDescription,
    second: ObjectDescription | null,
  ): Promise<ObjectDescription>;
  coalesce(
    first: ObjectDescription | null,
    second: ObjectDescription | null,
    third?: ObjectDescription | null,
  ): Promise<ObjectDescription | null>;
}
