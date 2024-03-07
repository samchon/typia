import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TupleRestArray =
  _test_functional_assertEqualsFunction(CustomGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
