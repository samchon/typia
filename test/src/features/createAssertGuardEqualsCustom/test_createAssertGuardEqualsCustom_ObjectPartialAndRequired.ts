import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectPartialAndRequired =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.createAssertGuardEquals<ObjectPartialAndRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
