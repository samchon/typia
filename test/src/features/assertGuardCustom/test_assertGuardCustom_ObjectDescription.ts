import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assertGuardCustom_ObjectDescription = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) =>
    typia.assertGuard<ObjectDescription>(input, (p) => new CustomGuardError(p)),
  );
