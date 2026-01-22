import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateEqualsParametersAsync_TupleUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TupleUnion")(TupleUnion)(
      (p: (input: TupleUnion) => Promise<TupleUnion>) =>
        typia.functional.validateEqualsParameters(p),
    );
