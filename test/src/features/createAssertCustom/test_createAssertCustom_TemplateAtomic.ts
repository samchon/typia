import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TemplateAtomic = (): void => _test_assert(CustomGuardError)(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)(typia.createAssert<TemplateAtomic>((p) => new CustomGuardError(p)));
