import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassClosure } from "../../structures/ClassClosure";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ClassClosure = _test_assertEquals(
  TypeGuardError,
)("ClassClosure")<ClassClosure>(ClassClosure)(
  typia.createAssertEquals<ClassClosure>(),
);
