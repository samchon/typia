import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assertEqualsCustom_TupleRestAtomic = _test_assertEquals(
  CustomGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)((input) =>
  typia.assertEquals<TupleRestAtomic>(input, (p) => new CustomGuardError(p)),
);
