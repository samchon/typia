import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateFunctionAsync_TupleOptional =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TupleOptional")(TupleOptional)(
      (p: (input: TupleOptional) => Promise<TupleOptional>) =>
        typia.functional.validateFunction(p),
    );
