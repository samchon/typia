import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_isFunction_TupleOptional = _test_functional_isFunction(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => TupleOptional) => typia.functional.isFunction(p),
)