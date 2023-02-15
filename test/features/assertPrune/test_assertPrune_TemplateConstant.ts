import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TemplateConstant = _test_assertPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertPrune(input),
    TemplateConstant.SPOILERS,
);
