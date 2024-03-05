import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateFunction_TupleOptional =
  _test_functional_validateFunction("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.validateFunction(p),
  );
