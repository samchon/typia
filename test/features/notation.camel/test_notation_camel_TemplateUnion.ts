import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_notation_validateCamel_TemplateUnion =
    _test_notation_validateGeneral("TemplateUnion")<TemplateUnion>(
        TemplateUnion
    )<typia.CamelCase<TemplateUnion>>({
        convert: typia.notations.createValidateCamel<TemplateUnion>(),
        assert: typia.createAssert<typia.CamelCase<TemplateUnion>>(),
    });
