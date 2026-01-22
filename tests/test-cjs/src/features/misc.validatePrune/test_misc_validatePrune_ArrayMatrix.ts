import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_validatePrune_ArrayMatrix = (): void =>
  _test_misc_validatePrune("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
    typia.misc.validatePrune<ArrayMatrix>(input),
  );
