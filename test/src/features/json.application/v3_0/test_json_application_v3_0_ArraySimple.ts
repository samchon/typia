import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_application_v3_0_ArraySimple = _test_json_application({
  version: "3.0",
  name: "ArraySimple",
})(typia.json.application<ArraySimpleApplication, "3.0">());

interface ArraySimpleApplication {
  insert(first: ArraySimple): Promise<void>;
  reduce(first: ArraySimple, second: ArraySimple | null): Promise<ArraySimple>;
  coalesce(
    first: ArraySimple | null,
    second: ArraySimple | null,
    third?: ArraySimple | null,
  ): Promise<ArraySimple | null>;
}
