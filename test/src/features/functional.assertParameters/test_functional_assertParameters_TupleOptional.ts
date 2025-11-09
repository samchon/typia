import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_TupleOptional = (): void => _test_functional_assertParameters(TypeGuardError)(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => TupleOptional) => typia.functional.assertParameters(p),
)