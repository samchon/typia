import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectPartial = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.misc.createAssertClone<ObjectPartial>((p) => new CustomGuardError(p)));
