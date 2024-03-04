import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsFunctionCustom_ObjectGeneric =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
