import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { TypeGuardError } from "typia";

export const test_assertEquals_FunctionalArrayUnion = _test_assertEquals(
  TypeGuardError,
)("FunctionalArrayUnion")<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
  typia.assertEquals<FunctionalArrayUnion>(input),
);
