import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertGuard_ObjectClosure = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectClosure")<ObjectClosure>(
    ObjectClosure,
  )((input) => typia.assertGuard<ObjectClosure>(input));
