import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_isReturn_TupleOptional = (): void => _test_functional_isReturn(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => TupleOptional) => typia.functional.isReturn(p),
)