import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_isFunctionAsync_ObjectLiteralType = _test_functional_isFunctionAsync(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.isFunction(p),
)