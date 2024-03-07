import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectHttpNullable =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.assertGuardEquals<ObjectHttpNullable>(input),
  );
