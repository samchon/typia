import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectLiteralType =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ObjectLiteralType",
  )(ObjectLiteralType)((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
