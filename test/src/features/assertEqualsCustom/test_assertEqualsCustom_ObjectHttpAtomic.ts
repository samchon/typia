import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_assertEqualsCustom_ObjectHttpAtomic = _test_assertEquals(
  CustomGuardError,
)("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  typia.assertEquals<ObjectHttpAtomic>(input, (p) => new CustomGuardError(p)),
);
