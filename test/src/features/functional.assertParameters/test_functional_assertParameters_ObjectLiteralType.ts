import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertParameters_ObjectLiteralType = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
    typia.functional.assertParameters(p),
  );
