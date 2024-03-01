import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createAssertEqualsCustom_ClassClosure = _test_assertEquals(
  CustomGuardError,
)("ClassClosure")<ClassClosure>(ClassClosure)(
  typia.createAssertEquals<ClassClosure>((p) => new CustomGuardError(p)),
);
