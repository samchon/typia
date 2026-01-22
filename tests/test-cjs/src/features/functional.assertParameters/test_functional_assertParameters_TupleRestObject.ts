import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertParameters_TupleRestObject = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertParameters(p),
  );
