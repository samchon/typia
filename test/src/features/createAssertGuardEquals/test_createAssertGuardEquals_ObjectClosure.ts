import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertGuardEquals_ObjectClosure = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectClosure")<ObjectClosure>(
    ObjectClosure,
  )(typia.createAssertGuardEquals<ObjectClosure>());
