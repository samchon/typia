import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_isParse_TemplateConstant = _test_isParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.isParse<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
