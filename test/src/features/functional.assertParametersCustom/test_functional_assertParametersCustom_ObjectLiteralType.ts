import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertParametersCustom_ObjectLiteralType =
  _test_functional_assertParameters(CustomGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
