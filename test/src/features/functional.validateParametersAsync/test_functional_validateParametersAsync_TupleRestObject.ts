import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateParametersAsync_TupleRestObject = (): Promise<void> => _test_functional_validateParametersAsync(
  "TupleRestObject"
)(TupleRestObject)(
  (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.validateParameters(p),
)