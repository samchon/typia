import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertEqualsReturnAsync_FunctionalArrayUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "FunctionalArrayUnion",
  )(FunctionalArrayUnion)(
    (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
      typia.functional.assertEqualsReturn(p),
  );
