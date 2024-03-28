import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertFunctionCustom_TupleUnion =
  _test_functional_assertFunction(CustomGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
