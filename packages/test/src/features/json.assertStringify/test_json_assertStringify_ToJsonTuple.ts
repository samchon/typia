import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_assertStringify_ToJsonTuple = _test_json_assertStringify(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) =>
  typia.json.assertStringify<ToJsonTuple>(input),
);
