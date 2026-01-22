import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateEqualsParameters_TupleOptional =
  (): void =>
    _test_functional_validateEqualsParameters("TupleOptional")(TupleOptional)(
      (p: (input: TupleOptional) => TupleOptional) =>
        typia.functional.validateEqualsParameters(p),
    );
