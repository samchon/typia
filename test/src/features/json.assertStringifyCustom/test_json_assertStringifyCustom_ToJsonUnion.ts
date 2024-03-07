import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ToJsonUnion =
  _test_json_assertStringify(CustomGuardError)("ToJsonUnion")<ToJsonUnion>(
    ToJsonUnion,
  )((input) =>
    typia.json.assertStringify<ToJsonUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
