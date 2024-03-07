import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_DynamicNever =
  _test_json_assertStringify(CustomGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )((input) =>
    typia.json.assertStringify<DynamicNever>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
