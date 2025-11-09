import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssertCustom_FunctionalTuple = (): void =>
  _test_assert(CustomGuardError)("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )(typia.createAssert<FunctionalTuple>((p) => new CustomGuardError(p)));
