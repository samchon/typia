import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_DynamicNever =
  _test_json_assertStringify(TypeGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )(typia.json.createAssertStringify<DynamicNever>());
