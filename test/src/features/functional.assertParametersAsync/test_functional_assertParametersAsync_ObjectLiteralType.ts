import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectLiteralType = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.assertParameters(p),
)