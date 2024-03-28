import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertEqualsCustom_ClassGetter = _test_assertEquals(
  CustomGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)(
  typia.createAssertEquals<ClassGetter>((p) => new CustomGuardError(p)),
);
