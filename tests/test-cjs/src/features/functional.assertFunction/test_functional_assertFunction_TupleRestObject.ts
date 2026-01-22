import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertFunction_TupleRestObject = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertFunction(p),
  );
