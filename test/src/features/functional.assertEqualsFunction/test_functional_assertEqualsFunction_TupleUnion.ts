import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsFunction_TupleUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => TupleUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
