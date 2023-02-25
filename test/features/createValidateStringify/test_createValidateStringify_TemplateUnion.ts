import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TemplateUnion = _test_validateStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createValidateStringify<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
