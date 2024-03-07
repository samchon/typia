import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TupleRestObject =
  _test_functional_assertEqualsParameters(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
