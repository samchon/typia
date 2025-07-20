import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsParameters_ObjectLiteralType =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ObjectLiteralType",
    )(ObjectLiteralType)((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.assertEqualsParameters(p),
    );
