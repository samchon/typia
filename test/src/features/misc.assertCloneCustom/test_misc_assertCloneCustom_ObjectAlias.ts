import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectAlias = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.misc.assertClone<ObjectAlias>(input, (p) => new CustomGuardError(p)));
