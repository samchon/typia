import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsReturnAsync_ObjectLiteralProperty =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ObjectLiteralProperty",
    )(ObjectLiteralProperty)(
      (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
        typia.functional.assertEqualsReturn(p),
    );
