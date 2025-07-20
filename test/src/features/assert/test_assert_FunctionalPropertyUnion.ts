import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assert_FunctionalPropertyUnion = (): void =>
  _test_assert(TypeGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
    typia.assert<FunctionalPropertyUnion>(input),
  );
