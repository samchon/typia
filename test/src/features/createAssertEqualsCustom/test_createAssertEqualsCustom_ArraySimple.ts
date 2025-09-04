import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertEqualsCustom_ArraySimple = (): void =>
  _test_assertEquals(CustomGuardError)("ArraySimple")<ArraySimple>(ArraySimple)(
    typia.createAssertEquals<ArraySimple>((p) => new CustomGuardError(p)),
  );
