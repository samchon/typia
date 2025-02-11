import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_isFunction_ObjectLiteralType =
  _test_functional_isFunction("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.isFunction(p),
  );
