import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertFunctionCustom_TupleRestArray =
  _test_functional_assertFunction(CustomGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
