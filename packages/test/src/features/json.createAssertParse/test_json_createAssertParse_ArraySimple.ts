import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_createAssertParse_ArraySimple = _test_json_assertParse(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.json.createAssertParse<ArraySimple>());
