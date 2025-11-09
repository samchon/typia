import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectPartial = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.createAssertEquals<ObjectPartial>((p) => new CustomGuardError(p)));
