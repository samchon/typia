import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_prune_TypeTagRangeBigInt = (): void =>
  _test_misc_prune("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )((input) => typia.misc.prune<TypeTagRangeBigInt>(input));
