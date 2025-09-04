import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetUnion } from "../../structures/SetUnion";

export const test_assert_SetUnion = (): void =>
  _test_assert(TypeGuardError)("SetUnion")<SetUnion>(SetUnion)((input) =>
    typia.assert<SetUnion>(input),
  );
