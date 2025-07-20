import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_assertClone_ObjectLiteralType = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.misc.assertClone<ObjectLiteralType>(input),
  );
