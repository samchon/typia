import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertEqualsCustom_ObjectLiteralType =
  _test_assertEquals(CustomGuardError)("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(
    typia.createAssertEquals<ObjectLiteralType>((p) => new CustomGuardError(p)),
  );
