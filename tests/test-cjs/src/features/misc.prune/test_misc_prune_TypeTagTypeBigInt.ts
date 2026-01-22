import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_misc_prune_TypeTagTypeBigInt = (): void =>
  _test_misc_prune("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
    (input) => typia.misc.prune<TypeTagTypeBigInt>(input),
  );
