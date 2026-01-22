import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createAssertEquals_ClassClosure = (): void =>
  _test_assertEquals(TypeGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )(typia.createAssertEquals<ClassClosure>());
