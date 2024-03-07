import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ToJsonNull =
  _test_json_assertStringify(CustomGuardError)("ToJsonNull")<ToJsonNull>(
    ToJsonNull,
  )(
    typia.json.createAssertStringify<ToJsonNull>(
      (p) => new CustomGuardError(p),
    ),
  );
