import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TupleOptional = _test_assert(CustomGuardError)(
  "TupleOptional",
)<TupleOptional>(TupleOptional)((input) =>
  typia.assert<TupleOptional>(input, (p) => new CustomGuardError(p)),
);
