import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_assertGuardCustom_ClassGetter = (): void =>
  _test_assertGuard(CustomGuardError)("ClassGetter")<ClassGetter>(ClassGetter)(
    (input) =>
      typia.assertGuard<ClassGetter>(input, (p) => new CustomGuardError(p)),
  );
