import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateReturnAsync_TupleRestObject =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TupleRestObject")(TupleRestObject)(
      (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
        typia.functional.validateReturn(p),
    );
