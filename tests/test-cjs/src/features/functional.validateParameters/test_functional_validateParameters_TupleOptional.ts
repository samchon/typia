import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateParameters_TupleOptional = (): void =>
  _test_functional_validateParameters("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => TupleOptional) =>
      typia.functional.validateParameters(p),
  );
