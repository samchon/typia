import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertGuard_ClassClosure = _test_assertGuard(TypeGuardError)(
  "ClassClosure",
)<ClassClosure>(ClassClosure)((input) =>
  typia.assertGuard<ClassClosure>(input),
);
