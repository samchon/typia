import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createAssertPruneCustom_TupleRestArray = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(
    typia.misc.createAssertPrune<TupleRestArray>(
      (p) => new CustomGuardError(p),
    ),
  );
