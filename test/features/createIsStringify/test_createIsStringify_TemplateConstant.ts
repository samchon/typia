import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TemplateConstant = _test_isStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createIsStringify<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);