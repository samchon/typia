import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertFunctionAsync_ObjectLiteralProperty =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ObjectLiteralProperty",
    )(ObjectLiteralProperty)(
      (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
        typia.functional.assertFunction(p),
    );
