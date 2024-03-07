import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TupleRestArray = _test_assert(CustomGuardError)(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
  typia.assert<TupleRestArray>(input, (p) => new CustomGuardError(p)),
);
