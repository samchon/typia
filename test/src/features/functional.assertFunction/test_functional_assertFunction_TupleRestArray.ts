import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertFunction_TupleRestArray =
  _test_functional_assertFunction(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertFunction(p),
  );
