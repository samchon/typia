import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertParameters_FunctionalArrayUnion =
  _test_functional_assertParameters(TypeGuardError)("FunctionalArrayUnion")(
    FunctionalArrayUnion,
  )((p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
    typia.functional.assertParameters(p),
  );
