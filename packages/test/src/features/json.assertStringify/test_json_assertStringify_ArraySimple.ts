import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_assertStringify_ArraySimple = _test_json_assertStringify(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  typia.json.assertStringify<ArraySimple>(input),
);
