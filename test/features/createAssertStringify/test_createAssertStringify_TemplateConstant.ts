import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TemplateConstant = _test_assertStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createAssertStringify<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);