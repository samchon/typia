import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TupleRestObject =
  _test_assertGuardEquals(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(
    typia.createAssertGuardEquals<TupleRestObject>(
      (p) => new CustomGuardError(p),
    ),
  );
