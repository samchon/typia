import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TemplateConstant = _test_assertEquals(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertEquals(input),
);
