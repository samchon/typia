import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_DynamicComposite = (): void => _test_misc_assertClone(TypeGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.misc.createAssertClone<DynamicComposite>());
