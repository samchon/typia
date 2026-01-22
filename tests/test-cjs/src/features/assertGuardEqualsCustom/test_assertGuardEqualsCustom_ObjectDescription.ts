import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assertGuardEqualsCustom_ObjectDescription = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.assertGuardEquals<ObjectDescription>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
