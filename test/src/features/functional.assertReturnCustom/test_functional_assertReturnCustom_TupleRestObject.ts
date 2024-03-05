import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertReturnCustom_TupleRestObject =
  _test_functional_assertReturn(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
