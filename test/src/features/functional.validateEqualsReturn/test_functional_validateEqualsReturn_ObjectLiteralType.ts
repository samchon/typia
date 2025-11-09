import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateEqualsReturn_ObjectLiteralType =
  (): void =>
    _test_functional_validateEqualsReturn("ObjectLiteralType")(
      ObjectLiteralType,
    )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.validateEqualsReturn(p),
    );
