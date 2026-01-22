import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_equalsParameters_TupleRestArray = (): void =>
  _test_functional_equalsParameters("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.equalsParameters(p),
  );
