import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateFunction_ObjectLiteralType =
  _test_functional_validateFunction("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.validateFunction(p),
  );
