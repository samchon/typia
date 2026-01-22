import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssertEqualsCustom_FunctionalTuple = (): void =>
  _test_assertEquals(CustomGuardError)("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )(typia.createAssertEquals<FunctionalTuple>((p) => new CustomGuardError(p)));
