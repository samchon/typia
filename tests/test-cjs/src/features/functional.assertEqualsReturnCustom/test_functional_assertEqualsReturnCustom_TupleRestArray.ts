import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsReturnCustom_TupleRestArray =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("TupleRestArray")(
      TupleRestArray,
    )((p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
