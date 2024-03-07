import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_FunctionalObjectUnion =
  _test_functional_assertParameters(TypeGuardError)("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
    typia.functional.assertParameters(p),
  );
