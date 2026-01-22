import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssert_ArrayMatrix = (): void =>
  _test_assert(TypeGuardError)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.createAssert<ArrayMatrix>(),
  );
