import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_assertPruneCustom_TupleRestArray = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) =>
    typia.misc.assertPrune<TupleRestArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
