import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { TypeGuardError } from "typia";

export const test_assertEquals_FunctionalArray = _test_assertEquals(
  TypeGuardError,
)("FunctionalArray")<FunctionalArray>(FunctionalArray)((input) =>
  typia.assertEquals<FunctionalArray>(input),
);
