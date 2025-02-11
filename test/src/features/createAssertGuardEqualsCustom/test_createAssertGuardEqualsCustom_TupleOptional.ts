import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../structures/TupleOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TupleOptional = _test_assertGuardEquals(CustomGuardError)(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)(typia.createAssertGuardEquals<TupleOptional>((p) => new CustomGuardError(p)));
