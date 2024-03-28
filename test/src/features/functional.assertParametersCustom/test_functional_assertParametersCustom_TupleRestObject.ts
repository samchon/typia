import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertParametersCustom_TupleRestObject =
  _test_functional_assertParameters(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
