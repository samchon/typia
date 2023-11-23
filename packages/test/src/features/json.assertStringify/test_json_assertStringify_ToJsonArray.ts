import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_assertStringify_ToJsonArray = _test_json_assertStringify(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) =>
  typia.json.assertStringify<ToJsonArray>(input),
);
