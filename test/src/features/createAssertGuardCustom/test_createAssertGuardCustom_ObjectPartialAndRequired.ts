import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createAssertGuardCustom_ObjectPartialAndRequired = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.createAssertGuard<ObjectPartialAndRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
