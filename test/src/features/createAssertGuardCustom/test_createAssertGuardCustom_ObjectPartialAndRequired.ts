import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectPartialAndRequired =
  _test_assertGuard(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.createAssertGuard<ObjectPartialAndRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
