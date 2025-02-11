import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_equalsReturn_TupleOptional =
  _test_functional_equalsReturn("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.equalsReturn(p),
  );
