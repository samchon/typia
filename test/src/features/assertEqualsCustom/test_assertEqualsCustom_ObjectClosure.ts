import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertEqualsCustom_ObjectClosure = _test_assertEquals(
  CustomGuardError,
)("ObjectClosure")<ObjectClosure>(ObjectClosure)((input) =>
  typia.assertEquals<ObjectClosure>(input, (p) => new CustomGuardError(p)),
);
