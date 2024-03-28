import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assertEquals_FunctionalArray = _test_assertEquals(
  TypeGuardError,
)("FunctionalArray")<FunctionalArray>(FunctionalArray)((input) =>
  typia.assertEquals<FunctionalArray>(input),
);
