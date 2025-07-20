import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsParametersAsync_TupleRestArray =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "TupleRestArray",
    )(TupleRestArray)((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.assertEqualsParameters(p),
    );
