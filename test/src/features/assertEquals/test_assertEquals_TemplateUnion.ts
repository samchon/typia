import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_assertEquals_TemplateUnion = _test_assertEquals(TypeGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.assertEquals<TemplateUnion>(input));
