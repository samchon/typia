import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assertGuardCustom_ObjectPartialAndRequired =
  _test_assertGuard(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.assertGuard<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
