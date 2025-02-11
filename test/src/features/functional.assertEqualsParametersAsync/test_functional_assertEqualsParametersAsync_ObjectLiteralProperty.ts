import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsParametersAsync_ObjectLiteralProperty =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectLiteralProperty",
  )(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      typia.functional.assertEqualsParameters(p),
  );
