import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_equalsParameters_TupleOptional =
  _test_functional_equalsParameters("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.equalsParameters(p),
  );
