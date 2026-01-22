import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertGuardEqualsCustom_TupleRestObject = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(
    typia.createAssertGuardEquals<TupleRestObject>(
      (p) => new CustomGuardError(p),
    ),
  );
