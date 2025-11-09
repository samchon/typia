import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_equalsFunction_ObjectLiteralType = (): void =>
  _test_functional_equalsFunction("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.equalsFunction(p),
  );
