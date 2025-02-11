import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsParametersAsync_ObjectLiteralType =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectLiteralType",
  )(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.assertEqualsParameters(p),
  );
