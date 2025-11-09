import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateFunction_TupleRestAtomic = (): void => _test_functional_validateFunction(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => TupleRestAtomic) => typia.functional.validateFunction(p),
)