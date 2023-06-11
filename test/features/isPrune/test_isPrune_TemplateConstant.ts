import typia from "../../../src";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TemplateConstant = _test_isPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.isPrune(input),
    TemplateConstant.SPOILERS,
);
