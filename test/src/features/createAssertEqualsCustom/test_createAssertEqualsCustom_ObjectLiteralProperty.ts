import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertEqualsCustom_ObjectLiteralProperty = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.createAssertEquals<ObjectLiteralProperty>(
      (p) => new CustomGuardError(p),
    ),
  );
