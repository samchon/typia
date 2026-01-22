import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertReturnCustom_TupleRestAtomic = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
