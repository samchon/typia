import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectClosure = _test_assertGuard(
  CustomGuardError,
)("ObjectClosure")<ObjectClosure>(ObjectClosure)(
  typia.createAssertGuard<ObjectClosure>((p) => new CustomGuardError(p)),
);
