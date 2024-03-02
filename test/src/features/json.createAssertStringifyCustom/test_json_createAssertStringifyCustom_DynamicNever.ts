import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createAssertStringifyCustom_DynamicNever =
  _test_json_assertStringify(CustomGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )(
    typia.json.createAssertStringify<DynamicNever>(
      (p) => new CustomGuardError(p),
    ),
  );
