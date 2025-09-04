import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createAssertGuardCustom_DynamicTag = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicTag")<DynamicTag>(DynamicTag)(
    typia.createAssertGuard<DynamicTag>((p) => new CustomGuardError(p)),
  );
