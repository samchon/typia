import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_equalsReturn_TupleRestArray = (): void =>
  _test_functional_equalsReturn("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.equalsReturn(p),
  );
