import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_isParametersAsync_ObjectLiteralType = _test_functional_isParametersAsync(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.isParameters(p),
)