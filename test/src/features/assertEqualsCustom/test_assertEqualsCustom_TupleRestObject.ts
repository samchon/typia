import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertEqualsCustom_TupleRestObject = (): void =>
  _test_assertEquals(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) =>
    typia.assertEquals<TupleRestObject>(input, (p) => new CustomGuardError(p)),
  );
