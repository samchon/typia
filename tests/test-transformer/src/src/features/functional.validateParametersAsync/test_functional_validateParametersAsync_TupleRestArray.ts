import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateParametersAsync_TupleRestArray = (): Promise<void> => _test_functional_validateParametersAsync(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.validateParameters(p),
)