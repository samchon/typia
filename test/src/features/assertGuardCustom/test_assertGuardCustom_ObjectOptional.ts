import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertGuardCustom_ObjectOptional = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) =>
    typia.assertGuard<ObjectOptional>(input, (p) => new CustomGuardError(p)),
  );
