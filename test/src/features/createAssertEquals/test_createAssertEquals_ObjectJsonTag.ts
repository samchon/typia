import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectJsonTag = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.createAssertEquals<ObjectJsonTag>());
