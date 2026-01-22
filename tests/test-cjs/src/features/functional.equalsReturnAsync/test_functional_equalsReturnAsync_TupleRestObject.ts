import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_equalsReturnAsync_TupleRestObject =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TupleRestObject")(TupleRestObject)(
      (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
        typia.functional.equalsReturn(p),
    );
