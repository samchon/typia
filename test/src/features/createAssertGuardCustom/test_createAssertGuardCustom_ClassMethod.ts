import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertGuardCustom_ClassMethod = (): void =>
  _test_assertGuard(CustomGuardError)("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.createAssertGuard<ClassMethod>((p) => new CustomGuardError(p)),
  );
