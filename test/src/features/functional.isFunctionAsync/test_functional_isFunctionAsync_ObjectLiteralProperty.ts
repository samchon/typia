import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_isFunctionAsync_ObjectLiteralProperty = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
    typia.functional.isFunction(p),
)