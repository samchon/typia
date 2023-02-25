import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TemplateUnion = _test_validate(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createValidate<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
