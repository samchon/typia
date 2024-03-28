import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertGuardEqualsCustom_TupleRestArray =
  _test_assertGuardEquals(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) =>
    typia.assertGuardEquals<TupleRestArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
