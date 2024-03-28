import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsParameters_TupleRestArray =
  _test_functional_assertEqualsParameters(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertEqualsParameters(p),
  );
