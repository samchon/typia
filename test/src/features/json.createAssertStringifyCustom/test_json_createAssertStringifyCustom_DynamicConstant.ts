import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createAssertStringifyCustom_DynamicConstant = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "DynamicConstant",
  )<DynamicConstant>(DynamicConstant)(
    typia.json.createAssertStringify<DynamicConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
