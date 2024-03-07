import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TupleRestObject = _test_assert(CustomGuardError)(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  typia.assert<TupleRestObject>(input, (p) => new CustomGuardError(p)),
);
