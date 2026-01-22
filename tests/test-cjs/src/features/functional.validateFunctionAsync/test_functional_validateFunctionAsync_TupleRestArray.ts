import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateFunctionAsync_TupleRestArray =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TupleRestArray")(TupleRestArray)(
      (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
        typia.functional.validateFunction(p),
    );
