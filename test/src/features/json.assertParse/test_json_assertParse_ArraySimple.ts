import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_assertParse_ArraySimple = _test_json_assertParse(
  TypeGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.json.assertParse<ArraySimple>(input),
);
