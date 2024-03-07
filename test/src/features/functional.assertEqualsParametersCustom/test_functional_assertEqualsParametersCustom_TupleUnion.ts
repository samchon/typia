import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TupleUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => TupleUnion) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
