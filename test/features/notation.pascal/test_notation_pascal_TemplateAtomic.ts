import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_validatePascal_TemplateAtomic =
    _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic,
    )<typia.PascalCase<TemplateAtomic>>({
        convert: (input) =>
            typia.notations.validatePascal<TemplateAtomic>(input),
        assert: typia.createAssert<typia.PascalCase<TemplateAtomic>>(),
    });
