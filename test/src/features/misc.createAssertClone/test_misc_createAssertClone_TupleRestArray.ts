import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createAssertClone_TupleRestArray =
  _test_misc_assertClone(TypeGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(typia.misc.createAssertClone<TupleRestArray>());
