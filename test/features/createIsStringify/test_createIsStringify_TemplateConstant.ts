import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createIsStringify_TemplateConstant = _test_isStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createIsStringify<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
