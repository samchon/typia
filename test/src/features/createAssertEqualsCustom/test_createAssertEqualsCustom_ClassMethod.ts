import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertEqualsCustom_ClassMethod = (): void =>
  _test_assertEquals(CustomGuardError)("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.createAssertEquals<ClassMethod>((p) => new CustomGuardError(p)),
  );
