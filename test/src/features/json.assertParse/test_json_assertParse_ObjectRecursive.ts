import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_assertParse_ObjectRecursive = _test_json_assertParse(
  TypeGuardError,
)("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.json.assertParse<ObjectRecursive>(input),
);
