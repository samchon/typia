import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_FunctionalArray = _test_assertEquals(TypeGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)(typia.createAssertEquals<FunctionalArray>());
