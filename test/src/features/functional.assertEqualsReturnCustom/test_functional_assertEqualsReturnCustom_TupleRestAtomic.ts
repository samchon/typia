import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsReturnCustom_TupleRestAtomic =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("TupleRestAtomic")(
      TupleRestAtomic,
    )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
