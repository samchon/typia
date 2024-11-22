import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_json_application_v3_0_ArrayAny = _test_json_application({
  version: "3.0",
  name: "ArrayAny",
})(typia.json.application<ArrayAnyApplication, "3.0">());

interface ArrayAnyApplication {
  insert(first: ArrayAny): Promise<void>;
  reduce(first: ArrayAny, second: ArrayAny | null): Promise<ArrayAny>;
  coalesce(
    first: ArrayAny | null,
    second: ArrayAny | null,
    third?: ArrayAny | null,
  ): Promise<ArrayAny | null>;
}
