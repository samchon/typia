import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_isReturnAsync_TupleRestAtomic =
  (): Promise<void> =>
    _test_functional_isReturnAsync("TupleRestAtomic")(TupleRestAtomic)(
      (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
        typia.functional.isReturn(p),
    );
