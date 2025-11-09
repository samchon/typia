import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertGuardEqualsCustom_ObjectLiteralType = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.assertGuardEquals<ObjectLiteralType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
