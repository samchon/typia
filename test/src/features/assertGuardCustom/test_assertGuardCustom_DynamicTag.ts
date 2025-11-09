import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assertGuardCustom_DynamicTag = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicTag")<DynamicTag>(DynamicTag)(
    (input) =>
      typia.assertGuard<DynamicTag>(input, (p) => new CustomGuardError(p)),
  );
