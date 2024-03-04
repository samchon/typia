import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertFunctionCustom_ObjectGenericUnion =
  _test_functional_assertFunction(CustomGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
