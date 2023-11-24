import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_prune_TypeTagObjectUnion = _test_misc_prune(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  typia.misc.prune<TypeTagObjectUnion>(input),
);
