import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createAssertStringify_DynamicConstant =
  _test_json_assertStringify("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(typia.json.createAssertStringify<DynamicConstant>());
