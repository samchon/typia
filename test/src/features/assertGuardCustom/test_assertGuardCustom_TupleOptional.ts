import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleOptional } from "../../structures/TupleOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TupleOptional = _test_assertGuard(CustomGuardError)(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)((input) => typia.assertGuard<TupleOptional>(input, (p) => new CustomGuardError(p)));
