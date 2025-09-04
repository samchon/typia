import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertFunctionCustom_TupleRestObject = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
