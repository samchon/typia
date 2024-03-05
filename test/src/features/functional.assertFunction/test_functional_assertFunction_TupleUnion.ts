import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertFunction_TupleUnion =
  _test_functional_assertFunction(TypeGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.assertFunction(p),
  );
