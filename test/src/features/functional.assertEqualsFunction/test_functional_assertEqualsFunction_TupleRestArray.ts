import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsFunction_TupleRestArray =
  _test_functional_assertEqualsFunction(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertEqualsFunction(p),
  );
