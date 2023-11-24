import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_assertPrune_ObjectHttpNullable = _test_misc_assertPrune(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.misc.assertPrune<ObjectHttpNullable>(input),
);
