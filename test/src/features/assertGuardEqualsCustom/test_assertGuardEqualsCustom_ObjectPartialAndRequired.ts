import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assertGuardEqualsCustom_ObjectPartialAndRequired =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.assertGuardEquals<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
