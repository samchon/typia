import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertFunctionCustom_ObjectGeneric =
  _test_functional_assertFunction(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
