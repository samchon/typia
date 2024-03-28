import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createAssertGuardCustom_ClassClosure = _test_assertGuard(
  CustomGuardError,
)("ClassClosure")<ClassClosure>(ClassClosure)(
  typia.createAssertGuard<ClassClosure>((p) => new CustomGuardError(p)),
);
