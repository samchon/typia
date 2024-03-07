import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectLiteralProperty = _test_assertGuard(
  CustomGuardError,
)("ObjectLiteralProperty")<ObjectLiteralProperty>(ObjectLiteralProperty)(
  (input) =>
    typia.assertGuard<ObjectLiteralProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
