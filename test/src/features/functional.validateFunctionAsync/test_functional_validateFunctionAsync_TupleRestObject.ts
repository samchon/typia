import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateFunctionAsync_TupleRestObject =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TupleRestObject")(TupleRestObject)(
      (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
        typia.functional.validateFunction(p),
    );
