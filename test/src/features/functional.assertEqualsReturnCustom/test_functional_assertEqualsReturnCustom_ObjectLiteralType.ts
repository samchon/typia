import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectLiteralType = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => ObjectLiteralType) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)