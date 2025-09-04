import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_isParametersAsync_TupleRestAtomic =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TupleRestAtomic")(TupleRestAtomic)(
      (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
        typia.functional.isParameters(p),
    );
