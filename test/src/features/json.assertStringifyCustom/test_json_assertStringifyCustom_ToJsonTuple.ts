import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_assertStringifyCustom_ToJsonTuple =
  _test_json_assertStringify(CustomGuardError)("ToJsonTuple")<ToJsonTuple>(
    ToJsonTuple,
  )((input) =>
    typia.json.assertStringify<ToJsonTuple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
