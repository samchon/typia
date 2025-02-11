import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertReturnCustom_TupleRestArray =
  _test_functional_assertReturn(CustomGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
