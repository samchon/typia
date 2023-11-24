import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertGuardEquals_ClassClosure = _test_assertGuardEquals(
  "ClassClosure",
)<ClassClosure>(ClassClosure)((input) =>
  typia.assertGuardEquals<ClassClosure>(input),
);
