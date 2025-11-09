import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_createAssertStringifyCustom_DynamicUndefined =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "DynamicUndefined",
    )<DynamicUndefined>(DynamicUndefined)(
      typia.json.createAssertStringify<DynamicUndefined>(
        (p) => new CustomGuardError(p),
      ),
    );
