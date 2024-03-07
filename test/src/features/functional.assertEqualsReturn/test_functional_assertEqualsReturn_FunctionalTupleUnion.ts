import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_FunctionalTupleUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalTupleUnion")(
    FunctionalTupleUnion,
  )((p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
