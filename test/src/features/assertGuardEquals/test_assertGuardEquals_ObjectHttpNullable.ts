import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertGuardEquals_ObjectHttpNullable = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.assertGuardEquals<ObjectHttpNullable>(input),
  );
