import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_validateEqualsFunction_TupleOptional = (): void => _test_functional_validateEqualsFunction(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => TupleOptional) => typia.functional.validateEqualsFunction(p),
)