import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectClosure = _test_assertGuard(
  CustomGuardError,
)("ObjectClosure")<ObjectClosure>(ObjectClosure)((input) =>
  typia.assertGuard<ObjectClosure>(input, (p) => new CustomGuardError(p)),
);
