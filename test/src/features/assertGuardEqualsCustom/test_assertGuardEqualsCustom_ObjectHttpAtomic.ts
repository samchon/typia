import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_assertGuardEqualsCustom_ObjectHttpAtomic = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
    typia.assertGuardEquals<ObjectHttpAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
