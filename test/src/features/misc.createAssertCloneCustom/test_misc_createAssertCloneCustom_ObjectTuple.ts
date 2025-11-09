import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectTuple = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.misc.createAssertClone<ObjectTuple>((p) => new CustomGuardError(p)));
