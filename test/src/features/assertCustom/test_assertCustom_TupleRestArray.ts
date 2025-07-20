import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertCustom_TupleRestArray = (): void =>
  _test_assert(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) =>
    typia.assert<TupleRestArray>(input, (p) => new CustomGuardError(p)),
  );
