import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_createAssertStringify_DynamicUndefined =
  _test_json_assertStringify(TypeGuardError)(
    "DynamicUndefined",
  )<DynamicUndefined>(DynamicUndefined)(
    typia.json.createAssertStringify<DynamicUndefined>(),
  );
