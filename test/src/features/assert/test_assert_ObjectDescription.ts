import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assert_ObjectDescription = _test_assert(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.assert<ObjectDescription>(input),
);
