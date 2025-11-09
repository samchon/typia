import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_validateEquals_TemplateUnion = (): void => _test_validateEquals(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.validateEquals<TemplateUnion>(input));
