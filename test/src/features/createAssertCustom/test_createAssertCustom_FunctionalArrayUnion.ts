import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertCustom_FunctionalArrayUnion = (): void =>
  _test_assert(CustomGuardError)("FunctionalArrayUnion")<FunctionalArrayUnion>(
    FunctionalArrayUnion,
  )(typia.createAssert<FunctionalArrayUnion>((p) => new CustomGuardError(p)));
