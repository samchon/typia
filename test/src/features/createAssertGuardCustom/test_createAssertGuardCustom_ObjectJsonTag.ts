import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectJsonTag = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.createAssertGuard<ObjectJsonTag>((p) => new CustomGuardError(p)));
