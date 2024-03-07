import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateParametersAsync_TupleOptional =
  _test_functional_validateParametersAsync("TupleOptional")(TupleOptional)(
    (p: (input: TupleOptional) => Promise<TupleOptional>) =>
      typia.functional.validateParameters(p),
  );
