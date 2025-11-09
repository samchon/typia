import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertEqualsFunction_FunctionalArrayUnion =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "FunctionalArrayUnion",
    )(FunctionalArrayUnion)(
      (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
        typia.functional.assertEqualsFunction(p),
    );
