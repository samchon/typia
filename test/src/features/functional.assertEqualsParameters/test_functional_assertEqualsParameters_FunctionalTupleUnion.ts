import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertEqualsParameters_FunctionalTupleUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "FunctionalTupleUnion",
  )(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
      typia.functional.assertEqualsParameters(p),
  );
