import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_createAssertStringifyCustom_ToJsonArray =
  _test_json_assertStringify(CustomGuardError)("ToJsonArray")<ToJsonArray>(
    ToJsonArray,
  )(
    typia.json.createAssertStringify<ToJsonArray>(
      (p) => new CustomGuardError(p),
    ),
  );
