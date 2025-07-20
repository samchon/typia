import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_validatePrune_ArraySimple = (): void =>
  _test_misc_validatePrune("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
    typia.misc.validatePrune<ArraySimple>(input),
  );
