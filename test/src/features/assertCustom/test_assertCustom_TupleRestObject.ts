import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertCustom_TupleRestObject = (): void =>
  _test_assert(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) =>
    typia.assert<TupleRestObject>(input, (p) => new CustomGuardError(p)),
  );
