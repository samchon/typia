import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_isStringify_TemplateConstant = _test_isStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.isStringify(input),
    TemplateConstant.SPOILERS,
);
