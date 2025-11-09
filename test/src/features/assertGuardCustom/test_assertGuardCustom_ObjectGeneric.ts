import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertGuardCustom_ObjectGeneric = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) =>
    typia.assertGuard<ObjectGeneric>(input, (p) => new CustomGuardError(p)),
  );
