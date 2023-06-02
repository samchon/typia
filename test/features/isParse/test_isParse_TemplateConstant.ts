import typia from "../../../src";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_TemplateConstant = _test_isParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.isParse<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
