import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertCustom_ClassMethod = (): void =>
  _test_assert(CustomGuardError)("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.createAssert<ClassMethod>((p) => new CustomGuardError(p)),
  );
