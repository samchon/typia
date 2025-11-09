import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateParameters_TupleRestAtomic = (): void => _test_functional_validateParameters(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => TupleRestAtomic) => typia.functional.validateParameters(p),
)