import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertParametersCustom_TupleRestAtomic =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("TupleRestAtomic")(
      TupleRestAtomic,
    )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
