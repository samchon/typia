import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateReturn_ObjectLiteralType = (): void =>
  _test_functional_validateReturn("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.validateReturn(p),
  );
