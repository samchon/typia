import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertReturn_FunctionalTupleUnion = (): void =>
  _test_functional_assertReturn(TypeGuardError)("FunctionalTupleUnion")(
    FunctionalTupleUnion,
  )((p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) =>
    typia.functional.assertReturn(p),
  );
