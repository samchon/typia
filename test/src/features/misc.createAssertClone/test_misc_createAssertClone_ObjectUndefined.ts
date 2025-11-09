import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectUndefined = (): void => _test_misc_assertClone(TypeGuardError)(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)(typia.misc.createAssertClone<ObjectUndefined>());
