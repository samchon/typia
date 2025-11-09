import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_isParametersAsync_TupleRestArray =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TupleRestArray")(TupleRestArray)(
      (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
        typia.functional.isParameters(p),
    );
