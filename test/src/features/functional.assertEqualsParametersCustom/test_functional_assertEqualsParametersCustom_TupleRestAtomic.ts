import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsParametersCustom_TupleRestAtomic =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "TupleRestAtomic",
    )(TupleRestAtomic)((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
