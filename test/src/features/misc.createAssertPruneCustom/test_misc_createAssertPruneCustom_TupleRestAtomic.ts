import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_createAssertPruneCustom_TupleRestAtomic = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(
    typia.misc.createAssertPrune<TupleRestAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
