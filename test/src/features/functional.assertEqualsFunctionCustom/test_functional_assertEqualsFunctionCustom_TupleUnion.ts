import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsFunctionCustom_TupleUnion =
  _test_functional_assertEqualsFunction(CustomGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => TupleUnion) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
