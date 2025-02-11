import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assert_ObjectDescription = _test_assert(TypeGuardError)(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.assert<ObjectDescription>(input),
);
