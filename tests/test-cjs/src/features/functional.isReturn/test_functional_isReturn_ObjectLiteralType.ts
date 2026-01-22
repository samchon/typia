import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_isReturn_ObjectLiteralType = (): void =>
  _test_functional_isReturn("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.isReturn(p),
  );
