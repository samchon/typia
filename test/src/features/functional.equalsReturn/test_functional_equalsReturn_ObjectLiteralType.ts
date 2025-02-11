import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_equalsReturn_ObjectLiteralType =
  _test_functional_equalsReturn("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.equalsReturn(p),
  );
