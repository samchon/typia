import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_assertStringify_ObjectTuple = _test_json_assertStringify(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) =>
  typia.json.assertStringify<ObjectTuple>(input),
);
