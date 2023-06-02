import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertParse_TemplateConstant = _test_assertParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertParse<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
