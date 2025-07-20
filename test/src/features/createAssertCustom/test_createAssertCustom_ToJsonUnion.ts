import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertCustom_ToJsonUnion = (): void =>
  _test_assert(CustomGuardError)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)(
    typia.createAssert<ToJsonUnion>((p) => new CustomGuardError(p)),
  );
