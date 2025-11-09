import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectOptional = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((input) => typia.misc.assertClone<ObjectOptional>(input, (p) => new CustomGuardError(p)));
