import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateEqualsParametersAsync_TupleRestArray =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TupleRestArray")(
      TupleRestArray,
    )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.validateEqualsParameters(p),
    );
