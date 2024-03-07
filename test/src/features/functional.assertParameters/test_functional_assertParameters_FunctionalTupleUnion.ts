import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_FunctionalTupleUnion =
  _test_functional_assertParameters(TypeGuardError)("FunctionalTupleUnion")(
    FunctionalTupleUnion,
  )((p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
    typia.functional.assertParameters(p),
  );
