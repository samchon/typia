import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assertGuardEqualsCustom_TupleRestAtomic =
  _test_assertGuardEquals(CustomGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )((input) =>
    typia.assertGuardEquals<TupleRestAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
