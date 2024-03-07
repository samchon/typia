import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_DynamicConstant =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicConstant",
  )<DynamicConstant>(DynamicConstant)(
    typia.json.createAssertStringify<DynamicConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
