import typia from "../../../src";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_TemplateConstant = _test_assert(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assert(input),
    TemplateConstant.SPOILERS,
);
