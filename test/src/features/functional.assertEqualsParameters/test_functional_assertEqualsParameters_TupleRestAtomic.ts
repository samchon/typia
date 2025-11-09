import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsParameters_TupleRestAtomic =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)("TupleRestAtomic")(
      TupleRestAtomic,
    )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.assertEqualsParameters(p),
    );
