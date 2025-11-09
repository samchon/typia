import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectRequired = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.createAssertEquals<ObjectRequired>((p) => new CustomGuardError(p)));
