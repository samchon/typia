import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_prune_TypeTagDefault = _test_misc_prune(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.misc.prune<TypeTagDefault>(input),
);
