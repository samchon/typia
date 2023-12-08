import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_createAssertParse_DynamicEnumeration =
  _test_json_assertParse("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.json.createAssertParse<DynamicEnumeration>());
