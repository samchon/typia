import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_isReturn_TupleRestAtomic = (): void => _test_functional_isReturn(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => TupleRestAtomic) => typia.functional.isReturn(p),
)