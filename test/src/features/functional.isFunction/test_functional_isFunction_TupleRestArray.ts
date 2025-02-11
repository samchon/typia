import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_isFunction_TupleRestArray =
  _test_functional_isFunction("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.isFunction(p),
  );
