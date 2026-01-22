import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertEqualsCustom_TupleRestAtomic = (): void =>
  _test_assertEquals(CustomGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(typia.createAssertEquals<TupleRestAtomic>((p) => new CustomGuardError(p)));
