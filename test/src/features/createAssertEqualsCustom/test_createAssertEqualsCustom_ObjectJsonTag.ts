import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectJsonTag = _test_assertEquals(CustomGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.createAssertEquals<ObjectJsonTag>((p) => new CustomGuardError(p)));
