import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateFunction_TupleRestArray = (): void =>
  _test_functional_validateFunction("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.validateFunction(p),
  );
