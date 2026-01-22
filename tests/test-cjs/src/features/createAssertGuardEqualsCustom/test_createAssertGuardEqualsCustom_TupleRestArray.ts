import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertGuardEqualsCustom_TupleRestArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(
    typia.createAssertGuardEquals<TupleRestArray>(
      (p) => new CustomGuardError(p),
    ),
  );
