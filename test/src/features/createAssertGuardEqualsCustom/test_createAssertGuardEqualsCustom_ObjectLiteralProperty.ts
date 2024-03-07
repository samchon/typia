import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectLiteralProperty =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.createAssertGuardEquals<ObjectLiteralProperty>(
      (p) => new CustomGuardError(p),
    ),
  );
