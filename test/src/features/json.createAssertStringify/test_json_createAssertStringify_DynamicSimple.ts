import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createAssertStringify_DynamicSimple =
  _test_json_assertStringify(TypeGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )(typia.json.createAssertStringify<DynamicSimple>());
