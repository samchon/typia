import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectLiteralProperty =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ObjectLiteralProperty",
  )(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      typia.functional.assertParameters(p),
  );
