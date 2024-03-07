import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateEqualsParametersAsync_ObjectLiteralType =
  _test_functional_validateEqualsParametersAsync("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.validateEqualsParameters(p),
  );
