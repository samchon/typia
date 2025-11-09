import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectPartial = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.createAssertEquals<ObjectPartial>());
