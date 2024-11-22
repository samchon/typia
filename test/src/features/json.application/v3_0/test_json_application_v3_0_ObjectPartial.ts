import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_application_v3_0_ObjectPartial = _test_json_application({
  version: "3.0",
  name: "ObjectPartial",
})(typia.json.application<ObjectPartialApplication, "3.0">());

interface ObjectPartialApplication {
  insert(first: ObjectPartial): Promise<void>;
  reduce(
    first: ObjectPartial,
    second: ObjectPartial | null,
  ): Promise<ObjectPartial>;
  coalesce(
    first: ObjectPartial | null,
    second: ObjectPartial | null,
    third?: ObjectPartial | null,
  ): Promise<ObjectPartial | null>;
}
