import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_DynamicComposite = (): void => _test_misc_assertClone(CustomGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)((input) => typia.misc.assertClone<DynamicComposite>(input, (p) => new CustomGuardError(p)));
