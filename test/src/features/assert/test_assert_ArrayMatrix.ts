import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assert_ArrayMatrix = (): void =>
  _test_assert(TypeGuardError)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    (input) => typia.assert<ArrayMatrix>(input),
  );
