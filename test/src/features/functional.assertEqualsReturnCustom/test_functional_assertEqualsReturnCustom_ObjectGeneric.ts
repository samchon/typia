import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectGeneric =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
