import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertReturn_FunctionalPropertyUnion = (): void =>
  _test_functional_assertReturn(TypeGuardError)("FunctionalPropertyUnion")(
    FunctionalPropertyUnion,
  )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
    typia.functional.assertReturn(p),
  );
