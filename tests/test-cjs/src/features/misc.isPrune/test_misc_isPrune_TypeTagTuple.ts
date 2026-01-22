import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_isPrune_TypeTagTuple = (): void =>
  _test_misc_isPrune("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)((input) =>
    typia.misc.isPrune<TypeTagTuple>(input),
  );
