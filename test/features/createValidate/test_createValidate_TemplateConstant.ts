import typia from "../../../src";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TemplateConstant = _test_validate(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createValidate<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
