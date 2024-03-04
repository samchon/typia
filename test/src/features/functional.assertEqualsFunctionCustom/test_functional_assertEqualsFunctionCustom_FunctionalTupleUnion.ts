import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertEqualsFunctionCustom_FunctionalTupleUnion =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "FunctionalTupleUnion",
  )(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
