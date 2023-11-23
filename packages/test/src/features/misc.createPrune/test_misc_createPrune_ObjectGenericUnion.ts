import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createPrune_ObjectGenericUnion = _test_misc_prune(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(
  typia.misc.createPrune<ObjectGenericUnion>(),
);
