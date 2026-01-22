import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createAssertGuardEquals_ClassClosure = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )(typia.createAssertGuardEquals<ClassClosure>());
