import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertEquals_TupleRestObject = (): void =>
  _test_assertEquals(TypeGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(typia.createAssertEquals<TupleRestObject>());
