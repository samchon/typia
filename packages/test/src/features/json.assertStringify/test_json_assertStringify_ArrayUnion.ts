import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_assertStringify_ArrayUnion = _test_json_assertStringify(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) =>
  typia.json.assertStringify<ArrayUnion>(input),
);
