import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_assertStringifyCustom_ToJsonArray = (): void =>
  _test_json_assertStringify(CustomGuardError)("ToJsonArray")<ToJsonArray>(
    ToJsonArray,
  )((input) =>
    typia.json.assertStringify<ToJsonArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
