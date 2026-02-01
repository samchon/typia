import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TemplateUnion = (): void => _test_assertGuard(TypeGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.createAssertGuard<TemplateUnion>());
