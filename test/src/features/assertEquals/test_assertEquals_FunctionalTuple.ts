import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assertEquals_FunctionalTuple = _test_assertEquals(
  TypeGuardError,
)("FunctionalTuple")<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.assertEquals<FunctionalTuple>(input),
);
