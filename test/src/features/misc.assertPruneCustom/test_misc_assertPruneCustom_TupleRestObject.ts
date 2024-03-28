import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_assertPruneCustom_TupleRestObject =
  _test_misc_assertPrune(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) =>
    typia.misc.assertPrune<TupleRestObject>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
