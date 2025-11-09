import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectLiteralType = (): void => _test_functional_assertReturn(TypeGuardError)(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => ObjectLiteralType) => typia.functional.assertReturn(p),
)