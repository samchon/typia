import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertEqualsCustom_ArrayMatrix = (): void =>
  _test_assertEquals(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.createAssertEquals<ArrayMatrix>((p) => new CustomGuardError(p)),
  );
