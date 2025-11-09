import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleOptional } from "../../structures/TupleOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TupleOptional = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => TupleOptional) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)