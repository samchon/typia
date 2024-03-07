import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_isReturnAsync_TupleRestArray =
  _test_functional_isReturnAsync("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.isReturn(p),
  );
