import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_createValidateSnake_TemplateAtomic =
    _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic
    )<typia.SnakeCase<TemplateAtomic>>({
        convert: (input) => typia.notations.validateSnake<TemplateAtomic>(input),
        assert: typia.createAssert<typia.SnakeCase<TemplateAtomic>>(),
    });
