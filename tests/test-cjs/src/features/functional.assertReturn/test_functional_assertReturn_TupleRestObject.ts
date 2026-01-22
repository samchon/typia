import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertReturn_TupleRestObject = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertReturn(p),
  );
