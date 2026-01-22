import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertEqualsReturn_FunctionalValueUnion =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalValueUnion")(
      FunctionalValueUnion,
    )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.assertEqualsReturn(p),
    );
