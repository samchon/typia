import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TemplateConstant = _test_assertParse(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createAssertParse<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
