import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertGuard_ClassMethod = (): void =>
  _test_assertGuard(TypeGuardError)("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.createAssertGuard<ClassMethod>(),
  );
