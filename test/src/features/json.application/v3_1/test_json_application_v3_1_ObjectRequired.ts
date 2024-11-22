import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_json_application_v3_1_ObjectRequired = _test_json_application(
  {
    version: "3.1",
    name: "ObjectRequired",
  },
)(typia.json.application<ObjectRequiredApplication, "3.1">());

interface ObjectRequiredApplication {
  insert(first: ObjectRequired): Promise<void>;
  reduce(
    first: ObjectRequired,
    second: ObjectRequired | null,
  ): Promise<ObjectRequired>;
  coalesce(
    first: ObjectRequired | null,
    second: ObjectRequired | null,
    third?: ObjectRequired | null,
  ): Promise<ObjectRequired | null>;
}
