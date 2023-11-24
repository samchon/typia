import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_prune_ObjectGenericArray = _test_misc_prune(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)((input) =>
  typia.misc.prune<ObjectGenericArray>(input),
);
