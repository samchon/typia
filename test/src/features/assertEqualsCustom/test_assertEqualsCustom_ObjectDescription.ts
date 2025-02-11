import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assertEqualsCustom_ObjectDescription = _test_assertEquals(
  CustomGuardError,
)("ObjectDescription")<ObjectDescription>(ObjectDescription)((input) =>
  typia.assertEquals<ObjectDescription>(input, (p) => new CustomGuardError(p)),
);
