import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsParameters_ObjectLiteralProperty =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectLiteralProperty",
  )(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.assertEqualsParameters(p),
  );
