import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertReturnAsync_ObjectLiteralType =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectLiteralType")(
      ObjectLiteralType,
    )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.assertReturn(p),
    );
