import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TemplateUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.misc.createAssertPrune<TemplateUnion>((p) => new CustomGuardError(p)));
