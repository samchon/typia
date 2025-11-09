import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_assertStringifyCustom_ToJsonUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)("ToJsonUnion")<ToJsonUnion>(
    ToJsonUnion,
  )((input) =>
    typia.json.assertStringify<ToJsonUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
