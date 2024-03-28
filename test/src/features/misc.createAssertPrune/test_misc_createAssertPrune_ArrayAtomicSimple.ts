import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createAssertPrune_ArrayAtomicSimple =
  _test_misc_assertPrune(TypeGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.misc.createAssertPrune<ArrayAtomicSimple>(),
  );
