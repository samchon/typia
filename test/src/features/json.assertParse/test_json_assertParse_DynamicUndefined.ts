import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_assertParse_DynamicUndefined = (): void =>
  _test_json_assertParse(TypeGuardError)("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )((input) => typia.json.assertParse<DynamicUndefined>(input));
