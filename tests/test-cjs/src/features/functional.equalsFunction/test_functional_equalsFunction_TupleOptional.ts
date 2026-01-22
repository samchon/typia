import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_equalsFunction_TupleOptional = (): void =>
  _test_functional_equalsFunction("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.equalsFunction(p),
  );
