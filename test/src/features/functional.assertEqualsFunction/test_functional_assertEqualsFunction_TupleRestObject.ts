import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsFunction_TupleRestObject = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertEqualsFunction(p),
  );
