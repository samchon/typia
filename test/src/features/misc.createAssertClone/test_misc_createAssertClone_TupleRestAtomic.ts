import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_createAssertClone_TupleRestAtomic =
  _test_misc_assertClone(TypeGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(typia.misc.createAssertClone<TupleRestAtomic>());
