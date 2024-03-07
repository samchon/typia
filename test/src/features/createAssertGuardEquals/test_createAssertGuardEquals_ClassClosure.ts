import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassClosure } from "../../structures/ClassClosure";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ClassClosure =
  _test_assertGuardEquals(TypeGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )(typia.createAssertGuardEquals<ClassClosure>());
