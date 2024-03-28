import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertFunction_FunctionalValueUnion =
  _test_functional_assertFunction(TypeGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.assertFunction(p),
  );
