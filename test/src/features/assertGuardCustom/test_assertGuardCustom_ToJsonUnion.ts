import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertGuardCustom_ToJsonUnion = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)(
    (input) =>
      typia.assertGuard<ToJsonUnion>(input, (p) => new CustomGuardError(p)),
  );
