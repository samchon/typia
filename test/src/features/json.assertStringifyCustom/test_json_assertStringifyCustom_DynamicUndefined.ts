import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_DynamicUndefined =
  _test_json_assertStringify(CustomGuardError)(
    "DynamicUndefined",
  )<DynamicUndefined>(DynamicUndefined)((input) =>
    typia.json.assertStringify<DynamicUndefined>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
