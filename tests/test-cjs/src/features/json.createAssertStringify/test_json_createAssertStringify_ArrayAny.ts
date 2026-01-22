import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createAssertStringify_ArrayAny = (): void =>
  _test_json_assertStringify(TypeGuardError)("ArrayAny")<ArrayAny>(ArrayAny)(
    typia.json.createAssertStringify<ArrayAny>(),
  );
