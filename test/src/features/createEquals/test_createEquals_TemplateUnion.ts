import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createEquals_TemplateUnion = (): void => _test_equals(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.createEquals<TemplateUnion>());
