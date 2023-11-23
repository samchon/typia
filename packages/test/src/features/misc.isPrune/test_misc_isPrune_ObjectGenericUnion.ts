import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_isPrune_ObjectGenericUnion = _test_misc_isPrune(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
  typia.misc.isPrune<ObjectGenericUnion>(input),
);
