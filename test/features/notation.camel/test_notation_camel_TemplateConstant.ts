import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_notation_validateCamel_TemplateConstant =
    _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
        TemplateConstant
    )<typia.CamelCase<TemplateConstant>>({
        convert: typia.notations.createValidateCamel<TemplateConstant>(),
        assert: typia.createAssert<typia.CamelCase<TemplateConstant>>(),
    });
