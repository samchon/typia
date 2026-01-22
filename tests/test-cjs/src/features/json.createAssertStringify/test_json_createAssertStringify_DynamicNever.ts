import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createAssertStringify_DynamicNever = (): void =>
  _test_json_assertStringify(TypeGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )(typia.json.createAssertStringify<DynamicNever>());
