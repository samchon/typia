import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_createAssertClone_ObjectLiteralProperty = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.misc.createAssertClone<ObjectLiteralProperty>(),
  );
