import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createAssertGuardCustom_DynamicTree = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicTree")<DynamicTree>(DynamicTree)(
    typia.createAssertGuard<DynamicTree>((p) => new CustomGuardError(p)),
  );
