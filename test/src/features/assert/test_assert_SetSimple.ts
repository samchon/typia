import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetSimple } from "../../structures/SetSimple";

export const test_assert_SetSimple = (): void =>
  _test_assert(TypeGuardError)("SetSimple")<SetSimple>(SetSimple)((input) =>
    typia.assert<SetSimple>(input),
  );
