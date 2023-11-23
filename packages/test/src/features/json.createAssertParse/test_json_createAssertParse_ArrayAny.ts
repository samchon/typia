import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createAssertParse_ArrayAny = _test_json_assertParse(
  "ArrayAny",
)<ArrayAny>(ArrayAny)(typia.json.createAssertParse<ArrayAny>());
