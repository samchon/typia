import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateEqualsParameters_ObjectLiteralType =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectLiteralType")(
      ObjectLiteralType,
    )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.validateEqualsParameters(p),
    );
