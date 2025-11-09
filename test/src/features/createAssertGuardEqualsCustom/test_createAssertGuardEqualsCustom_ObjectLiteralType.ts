import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertGuardEqualsCustom_ObjectLiteralType = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)(
    typia.createAssertGuardEquals<ObjectLiteralType>(
      (p) => new CustomGuardError(p),
    ),
  );
