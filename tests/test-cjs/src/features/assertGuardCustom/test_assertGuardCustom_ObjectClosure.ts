import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertGuardCustom_ObjectClosure = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectClosure")<ObjectClosure>(
    ObjectClosure,
  )((input) =>
    typia.assertGuard<ObjectClosure>(input, (p) => new CustomGuardError(p)),
  );
