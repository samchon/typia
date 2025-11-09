import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateEqualsParametersAsync_TupleRestAtomic =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TupleRestAtomic")(
      TupleRestAtomic,
    )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      typia.functional.validateEqualsParameters(p),
    );
