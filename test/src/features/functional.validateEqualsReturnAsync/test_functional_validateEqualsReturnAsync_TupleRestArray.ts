import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateEqualsReturnAsync_TupleRestArray =
  _test_functional_validateEqualsReturnAsync("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.validateEqualsReturn(p),
  );
