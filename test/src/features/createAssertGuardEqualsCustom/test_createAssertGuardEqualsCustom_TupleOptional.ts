import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssertGuardEqualsCustom_TupleOptional =
  _test_assertGuardEquals(CustomGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )(
    typia.createAssertGuardEquals<TupleOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
