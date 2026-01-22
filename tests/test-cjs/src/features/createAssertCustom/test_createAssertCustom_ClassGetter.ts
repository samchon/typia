import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertCustom_ClassGetter = (): void =>
  _test_assert(CustomGuardError)("ClassGetter")<ClassGetter>(ClassGetter)(
    typia.createAssert<ClassGetter>((p) => new CustomGuardError(p)),
  );
