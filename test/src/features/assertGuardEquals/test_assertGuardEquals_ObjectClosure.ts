import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertGuardEquals_ObjectClosure = _test_assertGuardEquals(
  TypeGuardError,
)("ObjectClosure")<ObjectClosure>(ObjectClosure)((input) =>
  typia.assertGuardEquals<ObjectClosure>(input),
);
