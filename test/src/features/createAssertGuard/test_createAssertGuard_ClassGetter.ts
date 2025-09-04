import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertGuard_ClassGetter = (): void =>
  _test_assertGuard(TypeGuardError)("ClassGetter")<ClassGetter>(ClassGetter)(
    typia.createAssertGuard<ClassGetter>(),
  );
