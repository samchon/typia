import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TemplateConstant = _test_isStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.isStringify(input),
    TemplateConstant.SPOILERS,
);
