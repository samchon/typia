import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectLiteralProperty =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
    typia.functional.assertReturn(p),
  );
