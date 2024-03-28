import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertGuardEqualsCustom_TupleOptional =
  _test_assertGuardEquals(CustomGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )((input) =>
    typia.assertGuardEquals<TupleOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
