import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateEqualsFunctionAsync_ObjectLiteralType =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectLiteralType")(
      ObjectLiteralType,
    )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.validateEqualsFunction(p),
    );
