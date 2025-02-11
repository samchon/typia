import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateEqualsFunctionAsync_ObjectLiteralProperty =
  _test_functional_validateEqualsFunctionAsync("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
    typia.functional.validateEqualsFunction(p),
  );
