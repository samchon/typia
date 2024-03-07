import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicUndefined =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicUndefined",
  )<DynamicUndefined>(DynamicUndefined)(
    typia.json.createAssertStringify<DynamicUndefined>(
      (p) => new CustomGuardError(p),
    ),
  );
