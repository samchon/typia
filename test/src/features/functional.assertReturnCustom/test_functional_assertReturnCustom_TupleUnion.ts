import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertReturnCustom_TupleUnion =
  _test_functional_assertReturn(CustomGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
