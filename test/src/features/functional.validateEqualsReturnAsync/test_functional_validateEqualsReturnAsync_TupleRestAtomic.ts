import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateEqualsReturnAsync_TupleRestAtomic =
  _test_functional_validateEqualsReturnAsync("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.validateEqualsReturn(p),
  );
