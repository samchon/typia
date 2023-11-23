import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_assertPrune_ObjectUnionDouble = _test_misc_assertPrune(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.misc.assertPrune<ObjectUnionDouble>(input),
);
