import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsFunctionCustom_TupleRestObject =
  _test_functional_assertEqualsFunction(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
