import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectPartial = (): void => _test_misc_assertClone(TypeGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.misc.createAssertClone<ObjectPartial>());
