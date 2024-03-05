import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateParameters_TupleRestArray =
  _test_functional_validateParameters("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.validateParameters(p),
  );
