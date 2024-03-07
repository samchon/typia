import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateEqualsReturnAsync_ObjectLiteralProperty =
  _test_functional_validateEqualsReturnAsync("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
    typia.functional.validateEqualsReturn(p),
  );
