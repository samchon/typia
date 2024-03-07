import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_FunctionalArrayUnion =
  _test_functional_assertFunction(TypeGuardError)("FunctionalArrayUnion")(
    FunctionalArrayUnion,
  )((p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
    typia.functional.assertFunction(p),
  );
