import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_assertStringify_ObjectDate = _test_json_assertStringify(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) =>
  typia.json.assertStringify<ObjectDate>(input),
);
