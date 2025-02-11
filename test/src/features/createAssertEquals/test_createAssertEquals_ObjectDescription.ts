import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectDescription = _test_assertEquals(TypeGuardError)(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.createAssertEquals<ObjectDescription>());
