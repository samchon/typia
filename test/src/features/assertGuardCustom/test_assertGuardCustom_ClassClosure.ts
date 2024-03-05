import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertGuardCustom_ClassClosure = _test_assertGuard(
  CustomGuardError,
)("ClassClosure")<ClassClosure>(ClassClosure)((input) =>
  typia.assertGuard<ClassClosure>(input, (p) => new CustomGuardError(p)),
);
