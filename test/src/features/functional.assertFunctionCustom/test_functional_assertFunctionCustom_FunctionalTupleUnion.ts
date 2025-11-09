import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertFunctionCustom_FunctionalTupleUnion =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("FunctionalTupleUnion")(
      FunctionalTupleUnion,
    )((p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
