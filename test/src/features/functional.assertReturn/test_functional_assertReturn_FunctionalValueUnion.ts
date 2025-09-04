import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertReturn_FunctionalValueUnion = (): void =>
  _test_functional_assertReturn(TypeGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.assertReturn(p),
  );
