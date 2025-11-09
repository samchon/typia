import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TemplateAtomic = (): void => _test_misc_assertClone(CustomGuardError)(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)(typia.misc.createAssertClone<TemplateAtomic>((p) => new CustomGuardError(p)));
