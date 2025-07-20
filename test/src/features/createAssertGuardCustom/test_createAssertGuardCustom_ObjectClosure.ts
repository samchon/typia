import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertGuardCustom_ObjectClosure = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectClosure")<ObjectClosure>(
    ObjectClosure,
  )(typia.createAssertGuard<ObjectClosure>((p) => new CustomGuardError(p)));
