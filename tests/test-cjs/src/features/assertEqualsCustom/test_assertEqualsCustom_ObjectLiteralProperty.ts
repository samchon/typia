import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertEqualsCustom_ObjectLiteralProperty = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.assertEquals<ObjectLiteralProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
