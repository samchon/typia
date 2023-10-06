import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_validateSnake_TemplateAtomic =
    _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic
    )<typia.SnakeCase<TemplateAtomic>>({
        convert: typia.notations.createValidateSnake<TemplateAtomic>(),
        assert: typia.createAssert<typia.SnakeCase<TemplateAtomic>>(),
    });
