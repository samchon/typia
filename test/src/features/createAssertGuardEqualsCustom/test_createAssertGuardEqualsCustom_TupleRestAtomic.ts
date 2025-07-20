import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertGuardEqualsCustom_TupleRestAtomic = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(
    typia.createAssertGuardEquals<TupleRestAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
