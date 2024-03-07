import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_TupleRestArray =
  _test_functional_assertParameters(CustomGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => TupleRestArray) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
