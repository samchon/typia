import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createValidateStringify_TemplateConstant =
    _test_validateStringify(
        "TemplateConstant",
        TemplateConstant.generate,
        typia.createValidateStringify<TemplateConstant>(),
        TemplateConstant.SPOILERS,
    );
