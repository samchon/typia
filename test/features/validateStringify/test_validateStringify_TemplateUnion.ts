import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TemplateUnion = _test_validateStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.validateStringify(input),
    TemplateUnion.SPOILERS,
);
