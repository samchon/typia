import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateEqualsParametersAsync_TupleOptional =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TupleOptional")(
      TupleOptional,
    )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
      typia.functional.validateEqualsParameters(p),
    );
