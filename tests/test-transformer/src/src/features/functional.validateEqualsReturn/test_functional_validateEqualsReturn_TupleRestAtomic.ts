import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateEqualsReturn_TupleRestAtomic = (): void => _test_functional_validateEqualsReturn(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => TupleRestAtomic) => typia.functional.validateEqualsReturn(p),
)