import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ToJsonTuple =
  _test_json_assertStringify(CustomGuardError)("ToJsonTuple")<ToJsonTuple>(
    ToJsonTuple,
  )(
    typia.json.createAssertStringify<ToJsonTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
