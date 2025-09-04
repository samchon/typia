import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertEquals_ArrayMatrix = (): void =>
  _test_assertEquals(TypeGuardError)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.createAssertEquals<ArrayMatrix>(),
  );
