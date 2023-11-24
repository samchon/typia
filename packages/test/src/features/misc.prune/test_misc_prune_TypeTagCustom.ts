import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_prune_TypeTagCustom = _test_misc_prune(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.misc.prune<TypeTagCustom>(input),
);
