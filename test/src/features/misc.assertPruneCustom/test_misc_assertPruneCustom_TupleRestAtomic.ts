import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TupleRestAtomic =
  _test_misc_assertPrune(CustomGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )((input) =>
    typia.misc.assertPrune<TupleRestAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
