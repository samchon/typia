import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_FunctionalArrayUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("FunctionalArrayUnion")(
    FunctionalArrayUnion,
  )((p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
