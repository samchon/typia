import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateEqualsParameters_TupleRestArray =
  _test_functional_validateEqualsParameters("TupleRestArray")(TupleRestArray)(
    (p: (input: TupleRestArray) => TupleRestArray) =>
      typia.functional.validateEqualsParameters(p),
  );
