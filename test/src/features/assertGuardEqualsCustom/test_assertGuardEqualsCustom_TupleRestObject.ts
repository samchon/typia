import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertGuardEqualsCustom_TupleRestObject = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) =>
    typia.assertGuardEquals<TupleRestObject>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
