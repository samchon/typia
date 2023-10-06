import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_notation_createValidateCamel_TemplateConstant =
    _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
        TemplateConstant
    )<typia.CamelCase<TemplateConstant>>({
        convert: (input) => typia.notations.validateCamel<TemplateConstant>(input),
        assert: typia.createAssert<typia.CamelCase<TemplateConstant>>(),
    });
