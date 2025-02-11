import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateEqualsFunction_TupleRestArray =
  _test_functional_validateEqualsFunction("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.validateEqualsFunction(p),
  );
