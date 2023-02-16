import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TemplateUnion = _test_validateParse(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createValidateParse<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
