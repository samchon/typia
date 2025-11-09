import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_equalsReturn_TupleRestAtomic = (): void =>
  _test_functional_equalsReturn("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.equalsReturn(p),
  );
