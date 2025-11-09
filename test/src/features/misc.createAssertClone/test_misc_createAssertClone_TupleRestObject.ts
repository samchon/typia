import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createAssertClone_TupleRestObject = (): void =>
  _test_misc_assertClone(TypeGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(typia.misc.createAssertClone<TupleRestObject>());
