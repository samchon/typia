import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateEqualsReturn_TupleOptional =
  _test_functional_validateEqualsReturn("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.validateEqualsReturn(p),
  );
