import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertGuardCustom_ObjectLiteralProperty = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.createAssertGuard<ObjectLiteralProperty>(
      (p) => new CustomGuardError(p),
    ),
  );
