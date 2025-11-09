import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateEqualsReturnAsync_ObjectLiteralType =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectLiteralType")(
      ObjectLiteralType,
    )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.validateEqualsReturn(p),
    );
