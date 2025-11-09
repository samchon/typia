import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectLiteralType = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => ObjectLiteralType) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)