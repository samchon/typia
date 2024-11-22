import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_application_v3_1_ObjectDate = _test_json_application({
  version: "3.1",
  name: "ObjectDate",
})(typia.json.application<ObjectDateApplication, "3.1">());

interface ObjectDateApplication {
  insert(first: ObjectDate): Promise<void>;
  reduce(first: ObjectDate, second: ObjectDate | null): Promise<ObjectDate>;
  coalesce(
    first: ObjectDate | null,
    second: ObjectDate | null,
    third?: ObjectDate | null,
  ): Promise<ObjectDate | null>;
}
