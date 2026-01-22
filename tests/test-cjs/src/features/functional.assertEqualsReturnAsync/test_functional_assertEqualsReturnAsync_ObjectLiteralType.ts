import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsReturnAsync_ObjectLiteralType =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ObjectLiteralType",
    )(ObjectLiteralType)(
      (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
        typia.functional.assertEqualsReturn(p),
    );
