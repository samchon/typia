import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assert_ObjectNullable = _test_assert(TypeGuardError)(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
  typia.assert<ObjectNullable>(input),
);
