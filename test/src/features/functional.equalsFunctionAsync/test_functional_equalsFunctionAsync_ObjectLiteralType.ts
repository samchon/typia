import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_equalsFunctionAsync_ObjectLiteralType =
  _test_functional_equalsFunctionAsync("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.equalsFunction(p),
  );
