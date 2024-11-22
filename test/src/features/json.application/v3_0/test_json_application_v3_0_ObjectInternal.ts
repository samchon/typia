import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_application_v3_0_ObjectInternal = _test_json_application(
  {
    version: "3.0",
    name: "ObjectInternal",
  },
)(typia.json.application<ObjectInternalApplication, "3.0">());

interface ObjectInternalApplication {
  insert(first: ObjectInternal): Promise<void>;
  reduce(
    first: ObjectInternal,
    second: ObjectInternal | null,
  ): Promise<ObjectInternal>;
  coalesce(
    first: ObjectInternal | null,
    second: ObjectInternal | null,
    third?: ObjectInternal | null,
  ): Promise<ObjectInternal | null>;
}
