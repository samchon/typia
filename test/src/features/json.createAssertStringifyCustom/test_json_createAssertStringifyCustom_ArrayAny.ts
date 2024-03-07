import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ArrayAny =
  _test_json_assertStringify(CustomGuardError)("ArrayAny")<ArrayAny>(ArrayAny)(
    typia.json.createAssertStringify<ArrayAny>((p) => new CustomGuardError(p)),
  );
