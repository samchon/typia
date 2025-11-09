import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertGuardCustom_ArrayUnion = (): void =>
  _test_assertGuard(CustomGuardError)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    (input) =>
      typia.assertGuard<ArrayUnion>(input, (p) => new CustomGuardError(p)),
  );
