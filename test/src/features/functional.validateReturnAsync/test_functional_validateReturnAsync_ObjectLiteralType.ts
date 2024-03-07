import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateReturnAsync_ObjectLiteralType =
  _test_functional_validateReturnAsync("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.validateReturn(p),
  );
