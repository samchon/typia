import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_FunctionalTuple = _test_assertEquals(TypeGuardError)(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)(typia.createAssertEquals<FunctionalTuple>());
