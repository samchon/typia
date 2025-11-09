import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { SetUnion } from "../../structures/SetUnion";

export const test_createAssertCustom_SetUnion = (): void =>
  _test_assert(CustomGuardError)("SetUnion")<SetUnion>(SetUnion)(
    typia.createAssert<SetUnion>((p) => new CustomGuardError(p)),
  );
