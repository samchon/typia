import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateReturn_TupleRestAtomic = (): void => _test_functional_validateReturn(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => TupleRestAtomic) => typia.functional.validateReturn(p),
)