import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertEquals_ObjectClosure = _test_assertEquals(
  TypeGuardError,
)("ObjectClosure")<ObjectClosure>(ObjectClosure)((input) =>
  typia.assertEquals<ObjectClosure>(input),
);
