import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateReturn_TupleRestArray = (): void =>
  _test_functional_validateReturn("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.validateReturn(p),
  );
