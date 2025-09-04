import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertGuard_TupleRestObject = (): void =>
  _test_assertGuard(TypeGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(typia.createAssertGuard<TupleRestObject>());
