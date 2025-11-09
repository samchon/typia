import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectHttpNullable = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)(typia.createAssertEquals<ObjectHttpNullable>());
