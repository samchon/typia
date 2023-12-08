import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_prune_ObjectUnionImplicit = _test_misc_prune(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  typia.misc.prune<ObjectUnionImplicit>(input),
);
