import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createAssertStringifyCustom_ArrayAny =
  _test_json_assertStringify(CustomGuardError)("ArrayAny")<ArrayAny>(ArrayAny)(
    typia.json.createAssertStringify<ArrayAny>((p) => new CustomGuardError(p)),
  );
