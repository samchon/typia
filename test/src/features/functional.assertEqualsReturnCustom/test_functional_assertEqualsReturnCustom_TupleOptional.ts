import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleOptional } from "../../structures/TupleOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_TupleOptional = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => TupleOptional) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)