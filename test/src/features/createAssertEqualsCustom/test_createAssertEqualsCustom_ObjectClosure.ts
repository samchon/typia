import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertEqualsCustom_ObjectClosure = _test_assertEquals(
  CustomGuardError,
)("ObjectClosure")<ObjectClosure>(ObjectClosure)(
  typia.createAssertEquals<ObjectClosure>((p) => new CustomGuardError(p)),
);
