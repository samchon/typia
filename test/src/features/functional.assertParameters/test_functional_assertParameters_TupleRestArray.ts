import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertParameters_TupleRestArray =
  _test_functional_assertParameters(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertParameters(p),
  );
