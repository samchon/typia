import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TemplateConstant = _test_assertParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertParse<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
