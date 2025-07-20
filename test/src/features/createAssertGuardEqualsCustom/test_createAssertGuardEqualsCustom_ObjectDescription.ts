import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createAssertGuardEqualsCustom_ObjectDescription = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)(
    typia.createAssertGuardEquals<ObjectDescription>(
      (p) => new CustomGuardError(p),
    ),
  );
