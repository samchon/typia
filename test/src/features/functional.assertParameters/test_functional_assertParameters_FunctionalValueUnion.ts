import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_FunctionalValueUnion =
  _test_functional_assertParameters(TypeGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.assertParameters(p),
  );
