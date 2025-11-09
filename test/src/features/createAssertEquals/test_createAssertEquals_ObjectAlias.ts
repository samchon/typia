import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectAlias = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.createAssertEquals<ObjectAlias>());
