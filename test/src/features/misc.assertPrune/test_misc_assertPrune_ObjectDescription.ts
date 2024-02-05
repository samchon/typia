import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_assertPrune_ObjectDescription = _test_misc_assertPrune(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.misc.assertPrune<ObjectDescription>(input),
);
