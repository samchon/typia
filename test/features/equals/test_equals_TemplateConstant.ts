import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TemplateConstant = _test_equals(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.equals(input),
);
