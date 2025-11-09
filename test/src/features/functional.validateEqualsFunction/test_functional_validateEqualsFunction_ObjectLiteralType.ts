import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateEqualsFunction_ObjectLiteralType = (): void => _test_functional_validateEqualsFunction(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => ObjectLiteralType) => typia.functional.validateEqualsFunction(p),
)