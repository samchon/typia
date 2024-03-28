import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertReturnCustom_ObjectLiteralType =
  _test_functional_assertReturn(CustomGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
