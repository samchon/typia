import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createAssertStringify_ConstantEnumeration =
  _test_json_assertStringify("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )(typia.json.createAssertStringify<ConstantEnumeration>());
