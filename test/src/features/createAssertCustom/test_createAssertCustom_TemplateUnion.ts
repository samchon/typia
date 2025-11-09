import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TemplateUnion = (): void => _test_assert(CustomGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.createAssert<TemplateUnion>((p) => new CustomGuardError(p)));
