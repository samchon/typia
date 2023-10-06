import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_notation_validateSnake_TemplateUnion =
    _test_notation_validateGeneral("TemplateUnion")<TemplateUnion>(
        TemplateUnion
    )<typia.SnakeCase<TemplateUnion>>({
        convert: typia.notations.createValidateSnake<TemplateUnion>(),
        assert: typia.createAssert<typia.SnakeCase<TemplateUnion>>(),
    });
