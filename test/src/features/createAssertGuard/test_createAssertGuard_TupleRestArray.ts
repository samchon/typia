import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertGuard_TupleRestArray = (): void =>
  _test_assertGuard(TypeGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(typia.createAssertGuard<TupleRestArray>());
