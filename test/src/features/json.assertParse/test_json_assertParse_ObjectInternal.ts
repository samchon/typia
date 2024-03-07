import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectInternal = _test_json_assertParse(
  TypeGuardError,
)("ObjectInternal")<ObjectInternal>(ObjectInternal)((input) =>
  typia.json.assertParse<ObjectInternal>(input),
);
