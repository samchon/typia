import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_equalsParametersAsync_TupleRestArray =
  _test_functional_equalsParametersAsync("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.equalsParameters(p),
  );
