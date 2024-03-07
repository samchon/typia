import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ToJsonDouble =
  _test_json_assertStringify(CustomGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )((input) =>
    typia.json.assertStringify<ToJsonDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
