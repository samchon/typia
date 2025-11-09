import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagMatrix = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.createAssertEquals<TypeTagMatrix>());
