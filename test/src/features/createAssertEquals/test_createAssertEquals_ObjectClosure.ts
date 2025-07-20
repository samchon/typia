import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertEquals_ObjectClosure = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectClosure")<ObjectClosure>(
    ObjectClosure,
  )(typia.createAssertEquals<ObjectClosure>());
