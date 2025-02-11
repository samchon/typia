import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertReturn_TupleRestArray =
  _test_functional_assertReturn(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertReturn(p),
  );
