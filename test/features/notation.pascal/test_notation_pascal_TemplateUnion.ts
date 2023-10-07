import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_notation_validatePascal_TemplateUnion =
    _test_notation_validateGeneral("TemplateUnion")<TemplateUnion>(
        TemplateUnion,
    )<typia.PascalCase<TemplateUnion>>({
        convert: (input) =>
            typia.notations.validatePascal<TemplateUnion>(input),
        assert: typia.createAssert<typia.PascalCase<TemplateUnion>>(),
    });
