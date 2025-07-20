import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertReturnCustom_FunctionalTupleUnion =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)("FunctionalTupleUnion")(
      FunctionalTupleUnion,
    )((p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
