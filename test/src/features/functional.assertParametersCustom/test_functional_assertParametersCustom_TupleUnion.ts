import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertParametersCustom_TupleUnion =
  _test_functional_assertParameters(CustomGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
