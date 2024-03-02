import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createAssertGuardEqualsCustom_ObjectHttpAtomic =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.createAssertGuardEquals<ObjectHttpAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
