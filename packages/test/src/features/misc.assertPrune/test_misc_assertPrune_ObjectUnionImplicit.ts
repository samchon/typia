import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_assertPrune_ObjectUnionImplicit = _test_misc_assertPrune(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  typia.misc.assertPrune<ObjectUnionImplicit>(input),
);
