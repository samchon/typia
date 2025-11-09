import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertGuardEqualsCustom_ObjectLiteralProperty = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.assertGuardEquals<ObjectLiteralProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
