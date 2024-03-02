import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_assertStringifyCustom_DynamicConstant =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicConstant",
  )<DynamicConstant>(DynamicConstant)((input) =>
    typia.json.assertStringify<DynamicConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
