import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_json_assertParse_DynamicUndefined = _test_json_assertParse(
  TypeGuardError,
)("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)((input) =>
  typia.json.assertParse<DynamicUndefined>(input),
);
