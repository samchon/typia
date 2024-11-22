import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_application_v3_0_ObjectJsonTag = _test_json_application({
  version: "3.0",
  name: "ObjectJsonTag",
})(typia.json.application<ObjectJsonTagApplication, "3.0">());

interface ObjectJsonTagApplication {
  insert(first: ObjectJsonTag): Promise<void>;
  reduce(
    first: ObjectJsonTag,
    second: ObjectJsonTag | null,
  ): Promise<ObjectJsonTag>;
  coalesce(
    first: ObjectJsonTag | null,
    second: ObjectJsonTag | null,
    third?: ObjectJsonTag | null,
  ): Promise<ObjectJsonTag | null>;
}
