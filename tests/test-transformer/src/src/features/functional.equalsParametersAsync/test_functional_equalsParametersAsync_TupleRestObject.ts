import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_equalsParametersAsync_TupleRestObject = (): Promise<void> => _test_functional_equalsParametersAsync(
  "TupleRestObject"
)(TupleRestObject)(
  (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.equalsParameters(p),
)