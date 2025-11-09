import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateEqualsParameters_TupleRestAtomic =
  (): void =>
    _test_functional_validateEqualsParameters("TupleRestAtomic")(
      TupleRestAtomic,
    )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.validateEqualsParameters(p),
    );
