import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_isFunction_TupleRestAtomic = (): void => _test_functional_isFunction(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => TupleRestAtomic) => typia.functional.isFunction(p),
)