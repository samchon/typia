import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_assertStringifyCustom_ToJsonNull = (): void =>
  _test_json_assertStringify(CustomGuardError)("ToJsonNull")<ToJsonNull>(
    ToJsonNull,
  )((input) =>
    typia.json.assertStringify<ToJsonNull>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
